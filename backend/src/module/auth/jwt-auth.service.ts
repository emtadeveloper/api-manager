import { ConflictException, Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import type { ConfigType } from "@nestjs/config";
import { InjectRepository } from "@nestjs/typeorm";
import { SignJWT, jwtVerify } from "jose";
import type { Response } from "express";
import type { Repository } from "typeorm";

import { hashPassword, verifyPassword } from "../../common/utils/password.util";
import { AppConfig } from "../../config/app.config";
import { JwtConfig } from "../../config/jwt.config";
import { UserEntity } from "../database/entities/user.entity";
import type { AuthSession, JwtPayload } from "./auth.types";

const ACCESS_COOKIE_NAME = "clb-session";
const REFRESH_COOKIE_NAME = "clb-refresh";
const ACCESS_MAX_AGE = 60 * 60 * 24;
const REFRESH_MAX_AGE = 60 * 60 * 24 * 7;

@Injectable()
export class JwtAuthService {
  constructor(
    @InjectRepository(UserEntity) private readonly users: Repository<UserEntity>,
    @Inject(AppConfig.KEY) private readonly appConfig: ConfigType<typeof AppConfig>,
    @Inject(JwtConfig.KEY) private readonly jwtConfig: ConfigType<typeof JwtConfig>,
  ) {}

  async login(username: string, password: string, response: Response) {
    const user = await this.findUser(username);
    if (!user || !(await verifyPassword(password, user.password))) throw new UnauthorizedException("نام کاربری یا رمز عبور اشتباه است");
    if (user.password && !user.password.startsWith("scrypt$")) {
      user.password = await hashPassword(password);
      await this.users.save(user);
    }
    const safeUser = this.safeUser(user);
    await this.setCookies(response, this.toSession(user));
    return { success: true, message: "ورود موفق بود", user: safeUser, data: { user: safeUser } };
  }

  async register(input: { firstName: string; lastName: string; username: string; password: string }, response: Response) {
    if (await this.findUser(input.username)) throw new ConflictException("این نام کاربری قبلاً ثبت شده است");
    const user = await this.users.save(this.users.create({ ...input, password: await hashPassword(input.password) }));
    await this.setCookies(response, this.toSession(user));
    return { success: true, data: { user: this.safeUser(user) } };
  }

  logout(response: Response) {
    response.clearCookie(ACCESS_COOKIE_NAME, { path: "/" });
    response.clearCookie(REFRESH_COOKIE_NAME, { path: "/" });
    return { success: true, message: "با موفقیت از حساب خارج شدید" };
  }

  async refresh(refreshToken: string | undefined, response: Response) {
    const payload = await this.verifyToken(refreshToken, true);
    if (!payload?.sub) throw new UnauthorizedException("توکن نوسازی معتبر نیست");
    const user = await this.users.findOne({
      where: { id: Number(payload.sub) },
      select: { id: true, firstName: true, lastName: true, username: true },
    });
    if (!user) throw new UnauthorizedException("کاربر یافت نشد");
    await this.setCookies(response, this.toSession(user), false);
    return { success: true, data: { user: this.safeUser(user) } };
  }

  async getSession(accessToken?: string, refreshToken?: string): Promise<AuthSession | null> {
    const payload = await this.verifyToken(accessToken, false) ?? await this.verifyToken(refreshToken, true);
    if (!payload?.sub) return null;
    const user = await this.users.findOne({
      where: { id: Number(payload.sub) },
      select: { id: true, firstName: true, lastName: true, username: true },
    });
    return user ? this.toSession(user, payload.exp ? payload.exp * 1000 : undefined) : null;
  }

  async requireSession(accessToken?: string) {
    const session = await this.getSession(accessToken);
    if (!session) throw new UnauthorizedException("نشست کاربر معتبر نیست");
    return session;
  }

  hasUsers() {
    return this.users.exists();
  }

  static getCookieName() { return ACCESS_COOKIE_NAME; }
  static getRefreshCookieName() { return REFRESH_COOKIE_NAME; }

  private findUser(username: string) {
    return this.users.createQueryBuilder("user").addSelect("user.password").where("LOWER(user.username) = LOWER(:username)", { username: username.trim() }).getOne();
  }

  private toSession(user: Pick<UserEntity, "id" | "username" | "firstName" | "lastName">, expires?: number): AuthSession {
    return { id: String(user.id), username: user.username ?? "", name: [user.firstName, user.lastName].filter(Boolean).join(" ") || user.username || "کاربر", expires: expires ?? Date.now() + ACCESS_MAX_AGE * 1000 };
  }

  private safeUser(user: Pick<UserEntity, "id" | "username" | "firstName" | "lastName">) {
    return { id: user.id, firstName: user.firstName, lastName: user.lastName, username: user.username };
  }

  private async setCookies(response: Response, session: AuthSession, includeRefresh = true) {
    response.cookie(ACCESS_COOKIE_NAME, await this.signToken(session, false), this.cookieOptions(ACCESS_MAX_AGE));
    if (includeRefresh) response.cookie(REFRESH_COOKIE_NAME, await this.signToken(session, true), this.cookieOptions(REFRESH_MAX_AGE));
  }

  private cookieOptions(maxAge: number) {
    return { httpOnly: true, secure: this.appConfig.nodeEnv === "production", sameSite: "lax" as const, path: "/", maxAge: maxAge * 1000 };
  }

  private async signToken(session: AuthSession, refresh: boolean) {
    const secret = refresh ? this.jwtConfig.refreshTokenSecret : this.jwtConfig.accessTokenSecret;
    if (!secret) throw new Error("JWT secret is not configured");
    return new SignJWT({ username: session.username, name: session.name, type: refresh ? "refresh" : "access" })
      .setProtectedHeader({ alg: "HS256", typ: "JWT" }).setSubject(session.id).setIssuedAt()
      .setExpirationTime(refresh ? this.jwtConfig.refreshTokenExpiresIn : this.jwtConfig.accessTokenExpiresIn)
      .sign(new TextEncoder().encode(secret));
  }

  private async verifyToken(token: string | undefined, refresh: boolean): Promise<JwtPayload | null> {
    if (!token) return null;
    const secret = refresh ? this.jwtConfig.refreshTokenSecret : this.jwtConfig.accessTokenSecret;
    if (!secret) return null;
    try {
      const { payload } = await jwtVerify(token, new TextEncoder().encode(secret));
      return payload.type === (refresh ? "refresh" : "access") ? payload as JwtPayload : null;
    } catch { return null; }
  }
}
