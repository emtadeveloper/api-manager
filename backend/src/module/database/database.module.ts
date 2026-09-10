import { Global, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

import { typeOrmConfig, typeormEntities } from "../../config/typeorm.config";
import { AppConfig } from "../../config/app.config";
import { DbConfig } from "../../config/db.config";

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [DbConfig.KEY, AppConfig.KEY],
      useFactory: typeOrmConfig,
    }),
    TypeOrmModule.forFeature(typeormEntities),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
