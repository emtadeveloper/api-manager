import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { UserEntity } from "../database/entities/user.entity";
import { AuthController } from "./auth.controller";
import { SessionGuard } from "./auth.guard";
import { JwtAuthService } from "./jwt-auth.service";

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [AuthController],
  providers: [JwtAuthService, SessionGuard],
  exports: [JwtAuthService, SessionGuard],
})
export class AuthModule {}
