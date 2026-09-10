import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import type { ConfigType } from "@nestjs/config";
import { EncryptJWT, jwtDecrypt } from "jose";

import type { Response } from "express";
import type { AuthSession } from "./auth.types";
import { AppConfig } from "../../config/app.config";
import { JwtConfig } from "../../config/jwt.config";

const COOKIE_NAME = "clb-session";
const SESSION_MAX_AGE = 60 * 60 * 24;

@Injectable()
export class AuthService {
  private readonly users = [
    {
      id: "1",
      username: "admin@rasan.com",
      password: "Admin123!",
      name: "مدیر سیستم",
    },
  ];

  constructor(
    @Inject(AppConfig.KEY) private readonly appConfig: ConfigType<typeof AppConfig>,
    @Inject(JwtConfig.KEY) private readonly jwtConfig: ConfigType<typeof JwtConfig>,
  ) {}

  async login(username: string, password: string, response: Response) {
    const user = this.users.find(
      (candidate) => candidate.username.toLowerCase() === username.toLowerCase() && candidate.password === password,
    );

    if (!user) {
      throw new UnauthorizedException("نام کاربری یا رمز عبور اشتباه است");
    }

    const session: AuthSession = {
      id: user.id,
      username: user.username,
      name: user.name,
      expires: Date.now() + SESSION_MAX_AGE * 1000,
    };

    response.cookie(COOKIE_NAME, await this.encrypt(session), {
      httpOnly: true,
      secure: this.appConfig.nodeEnv === "production",
      sameSite: "lax",
      path: "/",
      maxAge: SESSION_MAX_AGE * 1000,
    });

    return { success: true, message: "ورود موفق بود" };
  }

  logout(response: Response) {
    response.clearCookie(COOKIE_NAME, { path: "/" });
    return { success: true, message: "با موفقیت از حساب خارج شدید" };
  }

  async getSession(token?: string): Promise<AuthSession | null> {
    if (!token) return null;

    try {
      const { payload } = await jwtDecrypt(token, this.getSecretKey());
      const session = payload as unknown as AuthSession;
      return session.expires > Date.now() ? session : null;
    } catch {
      return null;
    }
  }

  async requireSession(token?: string) {
    const session = await this.getSession(token);
    if (!session) throw new UnauthorizedException("نشست کاربر معتبر نیست");
    return session;
  }

  static getCookieName() {
    return COOKIE_NAME;
  }

  private async encrypt(session: AuthSession) {
    return new EncryptJWT({ ...session })
      .setProtectedHeader({ alg: "dir", enc: "A256GCM" })
      .setIssuedAt()
      .setExpirationTime("1d")
      .encrypt(this.getSecretKey());
  }

  private getSecretKey() {
    const secret = this.jwtConfig.accessTokenSecret;
    if (!secret) throw new Error("AUTH_SECRET is not configured");

    const key = new TextEncoder().encode(secret);
    if (key.length !== 32) throw new Error("AUTH_SECRET must be exactly 32 bytes");
    return key;
  }
}
