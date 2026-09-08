import { Injectable } from "@nestjs/common";
import * as mssql from "mssql";
import { Client as PgClient } from "pg";
import oracledb from "oracledb";

type DatabaseType = "SQL" | "ORACLE" | "POSTGRES";

@Injectable()
export class ExternalDatabaseService {
  async checkConnection(type: DatabaseType, connectionString: string) {
    const client = await this.createClient(type, connectionString);
    await this.closeClient(type, client);
    return true;
  }

  async listDatabases(type: DatabaseType, connectionString: string) {
    const client = await this.createClient(type, connectionString);
    try {
      if (type === "POSTGRES") {
        return await (client as PgClient).query("SELECT datname FROM pg_database WHERE datistemplate = false").then((result) => result.rows);
      }

      if (type === "SQL") {
        return await (client as mssql.ConnectionPool).request().query("SELECT name FROM sys.databases").then((result) => result.recordset);
      }

      return await (client as oracledb.Connection).execute("SELECT username FROM all_users").then((result) => result.rows ?? []);
    } finally {
      await this.closeClient(type, client);
    }
  }

  async getViewData(type: DatabaseType, connectionString: string, viewName: string) {
    if (!/^[A-Za-z0-9_$.-]+$/.test(viewName)) {
      throw new Error("نام View معتبر نیست");
    }

    const client = await this.createClient(type, connectionString);
    try {
      const sql = `SELECT * FROM "${viewName}"`;
      if (type === "POSTGRES") return (await (client as PgClient).query(sql)).rows;
      if (type === "SQL") return (await (client as mssql.ConnectionPool).request().query(sql)).recordset;
      return (await (client as oracledb.Connection).execute(sql)).rows ?? [];
    } finally {
      await this.closeClient(type, client);
    }
  }

  private async createClient(type: DatabaseType, connectionString: string) {
    if (type === "POSTGRES") {
      const client = new PgClient({ connectionString });
      await client.connect();
      return client;
    }

    if (type === "SQL") {
      return mssql.connect(this.parseSqlServerConnection(connectionString));
    }

    return oracledb.getConnection({ connectString: connectionString });
  }

  private async closeClient(type: DatabaseType, client: PgClient | mssql.ConnectionPool | oracledb.Connection) {
    if (type === "POSTGRES") await (client as PgClient).end();
    else if (type === "SQL") await (client as mssql.ConnectionPool).close();
    else await (client as oracledb.Connection).close();
  }

  private parseSqlServerConnection(connectionString: string): mssql.config {
    const [serverPart, ...options] = connectionString.replace("sqlserver://", "").split(";");
    const [server, port] = serverPart.split(":");
    const values = Object.fromEntries(
      options
        .map((option) => option.split("="))
        .filter(([key, value]) => key && value)
        .map(([key, value]) => [key.toLowerCase(), value]),
    );

    return {
      server,
      port: Number(port ?? 1433),
      database: values.database ?? "master",
      user: values.user ?? "",
      password: values.password ?? "",
      options: { encrypt: false, trustServerCertificate: true },
    };
  }
}
