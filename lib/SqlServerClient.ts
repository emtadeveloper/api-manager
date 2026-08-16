import sql from "mssql";
import { IDatabaseClient } from "./IDatabseClient";

export class SqlServerClient implements IDatabaseClient {
  private pool: sql.ConnectionPool | null = null;

  async initialize(connectionString?: string) {
    if (!connectionString) {
      throw new Error("SQL Server connection required");
    }

    const [serverPart, ...options] = connectionString
      .replace("sqlserver://", "")
      .split(";");

    const [server, port] = serverPart.split(":");

    const params: Record<string, string> = {};

    for (const item of options) {
      const [key, value] = item.split("=");
      if (key && value) {
        params[key.toLowerCase()] = value;
      }
    }
    const config: sql.config = {
      server,
      port: Number(port ?? 1433),
      database: params.database ?? "master",
      user: params.user ?? "",
      password: params.password ?? "",
      options: {
            encrypt: false,
        trustServerCertificate: true,
      },
    };

    console.log(config);
    this.pool = await sql.connect(config);
  }

  async query<T>(sqlText: string, params: unknown[] = []): Promise<T[]> {
    if (!this.pool) throw new Error("Not initialized");

    const result = await this.pool.request().query(sqlText);

    return result.recordset as T[];
  }

  async execute(sqlText: string): Promise<number> {
    if (!this.pool) throw new Error("Not initialized");

    const result = await this.pool.request().query(sqlText);

    return result.rowsAffected[0];
  }

  async disconnect() {
    if (this.pool) {
      await this.pool.close();
      this.pool = null;
    }
  }

  async checkConnection() {
    try {
      await this.pool?.request().query("SELECT 1");

      return true;
    } catch {
      return false;
    }
  }
}
