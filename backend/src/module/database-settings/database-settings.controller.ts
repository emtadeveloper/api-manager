import { Body, Controller, Get, Put, UseGuards } from "@nestjs/common";
import { IsIn, IsString, MinLength } from "class-validator";

import { SessionGuard } from "../auth/auth.guard";
import { DatabaseSettingsService } from "./database-settings.service";

class DatabaseSettingDto {
  @IsIn(["SQL", "ORACLE", "POSTGRES"])
  dbType!: string;

  @IsString()
  @MinLength(1)
  dbServer!: string;

  @IsString()
  @MinLength(1)
  dbPort!: string;

  @IsString()
  @MinLength(1)
  dbUsername!: string;

  @IsString()
  @MinLength(1)
  dbPassword!: string;

  @IsString()
  @MinLength(1)
  dbName!: string;
}

@UseGuards(SessionGuard)
@Controller("database-settings")
export class DatabaseSettingsController {
  constructor(private readonly settings: DatabaseSettingsService) {}

  @Put()
  async replace(@Body() body: DatabaseSettingDto) {
    return { success: true, data: await this.settings.replace(body) };
  }

  @Get()
  async current() {
    return { success: true, data: await this.settings.findFirst() };
  }
}
