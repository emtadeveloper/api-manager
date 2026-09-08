import { Body, Controller, Get, Post, Req, Res } from "@nestjs/common";
import { IsString, MinLength } from "class-validator";
import type { Request, Response } from "express";

import { AuthService } from "./auth.service";

class LoginDto {
  @IsString()
  username!: string;

  @IsString()
  @MinLength(1)
  password!: string;
}

@Controller("auth")
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Post("login")
  login(@Body() body: LoginDto, @Res({ passthrough: true }) response: Response) {
    return this.auth.login(body.username, body.password, response);
  }

  @Post("logout")
  logout(@Res({ passthrough: true }) response: Response) {
    return this.auth.logout(response);
  }

  @Get("session")
  async session(@Req() request: Request) {
    const session = await this.auth.getSession(request.cookies?.[AuthService.getCookieName()]);
    if (!session) return { session: null, status: "unauthenticated" };

    return {
      session: {
        user: { id: session.id, name: session.name, email: session.username, image: null },
        expires: new Date(session.expires).toISOString(),
      },
      status: "authenticated",
    };
  }
}
