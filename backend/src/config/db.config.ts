import { registerAs } from "@nestjs/config";

import { ConfigKeys } from "../common/enum/config-keys.enum";

export const DbConfig = registerAs(ConfigKeys.Db, () => ({
  type: process.env.DB_TYPE ?? "better-sqlite3",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT ?? 0),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  sqlitePath: process.env.SQLITE_DATABASE_PATH ?? "./data/ApiManagerDB.sqlite3",
  synchronize: process.env.TYPEORM_SYNCHRONIZE !== "false",
}));
