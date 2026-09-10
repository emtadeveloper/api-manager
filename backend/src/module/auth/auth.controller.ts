import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req, Res } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { IsString, MinLength } from "class-validator";
import type { Request, Response } from "express";

import { JwtAuthService } from "./jwt-auth.service";

class LoginDto {
  @IsString()
  username!: string;

  @IsString()
  @MinLength(1)
  password!: string;
}

class RegisterDto extends LoginDto {
  @IsString()
  @MinLength(1)
  firstName!: string;

  @IsString()
  @MinLength(1)
  lastName!: string;
}

@ApiTags("auth")
@Controller("auth")
export class AuthController {
  constructor(private readonly auth: JwtAuthService) {}

  @Post("login")
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: "ورود کاربر و صدور JWT" })
  login(@Body() body: LoginDto, @Res({ passthrough: true }) response: Response) {
    return this.auth.login(body.username, body.password, response);
  }

  @Post("logout")
  logout(@Res({ passthrough: true }) response: Response) {
    return this.auth.logout(response);
  }

  @Post("register")
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: "ثبت کاربر جدید" })
  register(@Body() body: RegisterDto, @Res({ passthrough: true }) response: Response) {
    return this.auth.register(body, response);
  }

  @Post("refresh")
  @HttpCode(HttpStatus.OK)
  refresh(@Req() request: Request, @Res({ passthrough: true }) response: Response) {
    return this.auth.refresh(request.cookies?.[JwtAuthService.getRefreshCookieName()], response);
  }

  @Get("session")
  async session(@Req() request: Request) {
    const session = await this.auth.getSession(
      request.cookies?.[JwtAuthService.getCookieName()],
      request.cookies?.[JwtAuthService.getRefreshCookieName()],
    );
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
