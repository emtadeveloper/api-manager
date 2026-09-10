import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { DatabaseModule } from "./module/database/database.module";
import { configurations, validateEnvironment } from "./config/configuration";
import { AuthModule } from "./module/auth/auth.module";
import { UsersModule } from "./module/users/users.module";
import { DatabaseSettingsModule } from "./module/database-settings/database-settings.module";
import { RestServicesModule } from "./module/rest-services/rest-services.module";
import { ExternalDatabaseModule } from "./module/external-database/external-database.module";
import { GatewayModule } from "./module/gateway/gateway.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: configurations, validate: validateEnvironment }),
    DatabaseModule,
    AuthModule,
    UsersModule,
    DatabaseSettingsModule,
    RestServicesModule,
    ExternalDatabaseModule,
    GatewayModule,
  ],
})
export class AppModule {}
