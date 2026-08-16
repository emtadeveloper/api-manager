import { PrismaClient } from "@/generated/postgres";
import { PrismaPg } from "@prisma/adapter-pg";
import db from "@/lib/sqlite";
import { IDatabaseClient } from "./IDatabseClient";
export class PostgresClient implements IDatabaseClient {
  private prisma: PrismaClient | null = null;

  async initialize(connectionString?: string) {
    if (this.prisma) {
      await this.prisma.$disconnect();
    }

    const url = connectionString ?? (await this.loadConnection());

    const adapter = new PrismaPg({
      connectionString: url,
    });

    this.prisma = new PrismaClient({
      adapter,
    });
  }
  async query<T>(sql: string, params: unknown[] = []): Promise<T[]> {
    if (!this.prisma) throw new Error("Not initialized");

    return this.prisma.$queryRawUnsafe(sql, ...params) as Promise<T[]>;
  }

  async execute(sql: string, params: unknown[] = []) {
    if (!this.prisma) throw new Error("Not initialized");

    return this.prisma.$executeRawUnsafe(sql, ...params);
  }
  async disconnect() {
    if (this.prisma) {
      await this.prisma.$disconnect();
      this.prisma = null;
    }
  }
  async checkConnection() {
    if (!this.prisma) {
      return false;
    }

    try {
      await this.prisma.$queryRaw`SELECT 1`;
      return true;
    } catch {
      return false;
    }
  }

  private async loadConnection(): Promise<string> {
    const config = await db.databaseSetting.findFirst();

    if (!config) {
      throw new Error("Database settings not found");
    }

    return `postgresql://${config.dbUsername}:${config.dbPassword}@${config.dbServer}:${config.dbPort}/${config.dbName}`;
  }
}

