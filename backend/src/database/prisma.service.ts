import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../../generated/sqlite";
import { isAbsolute, resolve } from "node:path";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    const configuredPath = process.env.SQLITE_DATABASE_PATH ?? "./data/ApiManagerDB.sqlite3";
    const projectRoot = resolve(__dirname, "../..");
    const databasePath = isAbsolute(configuredPath)
      ? configuredPath
      : resolve(projectRoot, configuredPath);
    const adapter = new PrismaBetterSqlite3({ url: `file:${databasePath}` });

    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
