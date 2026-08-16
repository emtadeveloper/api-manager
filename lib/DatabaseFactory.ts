import { DatabaseType } from "@/utils/database-type.enum";
import { IDatabaseClient } from "./IDatabseClient";
import { PostgresClient } from "./PostgresClient";
import { SqlServerClient } from "./SqlServerClient";
import { OracleClient } from "./OracleClient";

export class DatabaseFactory {
  static async create(
    type: DatabaseType,
    connection?: string,
  ): Promise<IDatabaseClient> {
    let client: IDatabaseClient;

    switch (type) {
      case DatabaseType.POSTGRES:
        client = new PostgresClient();
        break;

      case DatabaseType.SQL:
        client = new SqlServerClient();
        break;
      case DatabaseType.ORACLE:
        return new OracleClient();
      default:
        throw new Error("Unsupported database");
    }

    await client.initialize(connection);

    return client;
  }
}
