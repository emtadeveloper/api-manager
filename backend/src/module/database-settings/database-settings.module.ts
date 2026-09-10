import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AuthModule } from "../auth/auth.module";
import { DatabaseSettingEntity } from "../database/entities/database-setting.entity";
import { DatabaseSettingsController } from "./database-settings.controller";
import { DatabaseSettingsService } from "./database-settings.service";

@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([DatabaseSettingEntity])],
  controllers: [DatabaseSettingsController],
  providers: [DatabaseSettingsService],
})
export class DatabaseSettingsModule {}
