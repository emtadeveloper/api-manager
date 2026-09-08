import { Module } from "@nestjs/common";

import { AuthModule } from "../auth/auth.module";
import { DatabaseSettingsController } from "./database-settings.controller";
import { DatabaseSettingsService } from "./database-settings.service";

@Module({
  imports: [AuthModule],
  controllers: [DatabaseSettingsController],
  providers: [DatabaseSettingsService],
})
export class DatabaseSettingsModule {}
