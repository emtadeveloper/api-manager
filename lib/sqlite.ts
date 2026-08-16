import { PrismaClient } from "@/generated/sqlite";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const adapter = new PrismaBetterSqlite3({
  url: "file:./prisma/sqlite/ApiManagerDB.sqlite3",
});

const ApiMangerSqliteDB = new PrismaClient({
  adapter,
});

export default ApiMangerSqliteDB;
