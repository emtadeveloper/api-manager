import { Module } from "@nestjs/common";

import { AuthModule } from "../auth/auth.module";
import { RestServicesController } from "./rest-services.controller";
import { RestServicesTestsController } from "./rest-services.tests.controller";
import { RestServicesService } from "./rest-services.service";

@Module({
  imports: [AuthModule],
  controllers: [RestServicesController, RestServicesTestsController],
  providers: [RestServicesService],
  exports: [RestServicesService],
})
export class RestServicesModule {}
