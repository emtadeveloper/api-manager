import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { IsIn, IsString, MinLength } from "class-validator";

import { SessionGuard } from "../auth/auth.guard";
import { ExternalDatabaseService } from "./external-database.service";

class DatabaseConnectionDto {
  @IsIn(["SQL", "ORACLE", "POSTGRES"])
  dbType!: "SQL" | "ORACLE" | "POSTGRES";

  @IsString()
  @MinLength(1)
  connectionString!: string;
}

class ViewDataDto extends DatabaseConnectionDto {
  @IsString()
  @MinLength(1)
  viewName!: string;
}

@UseGuards(SessionGuard)
@Controller("external-database")
export class ExternalDatabaseController {
  constructor(private readonly databases: ExternalDatabaseService) {}

  @Post("check")
  async check(@Body() body: DatabaseConnectionDto) {
    try {
      return { success: true, data: await this.databases.checkConnection(body.dbType, body.connectionString) };
    } catch (error) {
      return { success: false, error: `خطا در اتصال به پایگاه داده ${(error as Error).message}` };
    }
  }

  @Post("list")
  async list(@Body() body: DatabaseConnectionDto) {
    try {
      return { success: true, data: await this.databases.listDatabases(body.dbType, body.connectionString) };
    } catch (error) {
      return { success: false, error: `خطا در فراخوانی لیست دیتابیس ${(error as Error).message}` };
    }
  }

  @Post("view-data")
  async viewData(@Body() body: ViewDataDto) {
    try {
      return { success: true, data: await this.databases.getViewData(body.dbType, body.connectionString, body.viewName) };
    } catch (error) {
      return { success: false, error: `خطا در فراخوانی اطلاعات ${(error as Error).message}` };
    }
  }
}
