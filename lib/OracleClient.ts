import oracledb from "oracledb";
import { IDatabaseClient } from "./IDatabseClient";


export class OracleClient implements IDatabaseClient {

    private connection: oracledb.Connection | null = null;


    async initialize(connectionString?: string) {

        if (!connectionString)
            throw new Error("Oracle connection required");


        this.connection =
            await oracledb.getConnection({
                connectString: connectionString
            });
    }


    async query<T>(
        sql: string,
        params: unknown[] = []
    ): Promise<T[]> {

        if (!this.connection)
            throw new Error("Not initialized");


        const result =
            await this.connection.execute(sql);


        return result.rows as T[];
    }


    async execute(sql: string) {

        if (!this.connection)
            throw new Error("Not initialized");


        const result =
            await this.connection.execute(sql);


        await this.connection.commit();

        return result.rowsAffected ?? 0;
    }


    async disconnect() {

        await this.connection?.close();
        this.connection = null;

    }


    async checkConnection() {

        try {
            await this.connection?.execute(
                "SELECT 1 FROM dual"
            );

            return true;

        } catch {

            return false;

        }
    }
}