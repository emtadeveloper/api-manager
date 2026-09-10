import type { TypeOrmModuleOptions } from "@nestjs/typeorm";
import type { ConfigType } from "@nestjs/config";

import { AppConfig } from "./app.config";
import { DbConfig } from "./db.config";

import { DatabaseSettingEntity } from "../module/database/entities/database-setting.entity";
import { RestAuthServiceParamEntity } from "../module/database/entities/rest-auth-service-param.entity";
import { RestAuthServiceSettingEntity } from "../module/database/entities/rest-auth-service-setting.entity";
import { RestDatabaseSettingEntity } from "../module/database/entities/rest-database-setting.entity";
import { RestExternalApiParamEntity } from "../module/database/entities/rest-external-api-param.entity";
import { RestExternalApiSettingEntity } from "../module/database/entities/rest-external-api-setting.entity";
import { RestServiceEntity } from "../module/database/entities/rest-service.entity";
import { UserEntity } from "../module/database/entities/user.entity";

export const typeormEntities = [
  UserEntity,
  DatabaseSettingEntity,
  RestServiceEntity,
  RestDatabaseSettingEntity,
  RestExternalApiSettingEntity,
  RestExternalApiParamEntity,
  RestAuthServiceSettingEntity,
  RestAuthServiceParamEntity,
];

type DatabaseConfig = ConfigType<typeof DbConfig>;
type ApplicationConfig = ConfigType<typeof AppConfig>;

export function typeOrmConfig(db: DatabaseConfig, app: ApplicationConfig): TypeOrmModuleOptions {
  const databaseType = db.type;
  const isProduction = app.nodeEnv === "production";
  const synchronize = db.synchronize;

  if (databaseType === "mysql" || databaseType === "postgres") {
    return {
      type: databaseType,
      host: db.host,
      port: db.port,
      username: db.username,
      password: db.password,
      database: db.database,
      entities: typeormEntities,
      synchronize: !isProduction && synchronize,
      logging: false,
    } as TypeOrmModuleOptions;
  }

  return {
    type: "better-sqlite3",
    database: db.sqlitePath,
    entities: typeormEntities,
    synchronize: !isProduction && synchronize,
    logging: app.nodeEnv === "development" ? ["error"] : false,
  } as TypeOrmModuleOptions;
}
