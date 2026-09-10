import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AuthModule } from "../auth/auth.module";
import { RestAuthServiceParamEntity } from "../database/entities/rest-auth-service-param.entity";
import { RestAuthServiceSettingEntity } from "../database/entities/rest-auth-service-setting.entity";
import { RestDatabaseSettingEntity } from "../database/entities/rest-database-setting.entity";
import { RestExternalApiParamEntity } from "../database/entities/rest-external-api-param.entity";
import { RestExternalApiSettingEntity } from "../database/entities/rest-external-api-setting.entity";
import { RestServiceEntity } from "../database/entities/rest-service.entity";
import { RestServicesController } from "./rest-services.controller";
import { RestServicesTestsController } from "./rest-services.tests.controller";
import { RestServicesTypeOrmService } from "./rest-services-typeorm.service";

@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([
    RestServiceEntity,
    RestDatabaseSettingEntity,
    RestExternalApiSettingEntity,
    RestExternalApiParamEntity,
    RestAuthServiceSettingEntity,
    RestAuthServiceParamEntity,
  ])],
  controllers: [RestServicesController, RestServicesTestsController],
  providers: [RestServicesTypeOrmService],
  exports: [RestServicesTypeOrmService],
})
export class RestServicesModule {}
