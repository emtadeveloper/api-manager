export interface IDatabaseClient {
  initialize(connectionString?: string): Promise<void>;

  disconnect(): Promise<void>;

  checkConnection(): Promise<boolean>;

  query<T = unknown>(
    sql: string,
    params?: unknown[]
  ): Promise<T[]>;

  execute(
    sql: string,
    params?: unknown[]
  ): Promise<number>;
}