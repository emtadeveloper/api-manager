import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { IsString, MinLength } from "class-validator";

import { SessionGuard } from "../auth/auth.guard";
import { UsersService } from "./users.service";

class CreateUserDto {
  @IsString()
  @MinLength(1)
  firstName!: string;

  @IsString()
  @MinLength(1)
  lastName!: string;

  @IsString()
  @MinLength(1)
  username!: string;

  @IsString()
  @MinLength(1)
  password!: string;
}

@UseGuards(SessionGuard)
@Controller("users")
export class UsersController {
  constructor(private readonly users: UsersService) {}

  @Post()
  async create(@Body() body: CreateUserDto) {
    return { success: true, data: await this.users.replace(body) };
  }

  @Get("current")
  async current() {
    return { success: true, data: await this.users.findFirst() };
  }
}
