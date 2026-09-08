import { Module } from "@nestjs/common";

import { AuthModule } from "../auth/auth.module";
import { ExternalDatabaseController } from "./external-database.controller";
import { ExternalDatabaseService } from "./external-database.service";

@Module({
  imports: [AuthModule],
  controllers: [ExternalDatabaseController],
  providers: [ExternalDatabaseService],
  exports: [ExternalDatabaseService],
})
export class ExternalDatabaseModule {}
