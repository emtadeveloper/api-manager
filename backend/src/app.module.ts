import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { PrismaModule } from "./database/prisma.module";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { DatabaseSettingsModule } from "./database-settings/database-settings.module";
import { RestServicesModule } from "./rest-services/rest-services.module";
import { ExternalDatabaseModule } from "./external-database/external-database.module";
import { GatewayModule } from "./gateway/gateway.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    UsersModule,
    DatabaseSettingsModule,
    RestServicesModule,
    ExternalDatabaseModule,
    GatewayModule,
  ],
})
export class AppModule {}
