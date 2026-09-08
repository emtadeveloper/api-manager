import { Module } from "@nestjs/common";

import { ExternalDatabaseModule } from "../external-database/external-database.module";
import { RestServicesModule } from "../rest-services/rest-services.module";
import { GatewayController } from "./gateway.controller";
import { GatewayService } from "./gateway.service";

@Module({
  imports: [RestServicesModule, ExternalDatabaseModule],
  controllers: [GatewayController],
  providers: [GatewayService],
})
export class GatewayModule {}
