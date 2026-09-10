declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV?: "development" | "production" | "test";
    PORT: string;
    FRONTEND_ORIGIN?: string;
    DB_TYPE?: "mysql" | "postgres" | "better-sqlite3";
    DB_PORT?: string;
    DB_NAME?: string;
    DB_USERNAME?: string;
    DB_PASSWORD?: string;
    DB_HOST?: string;
    TYPEORM_SYNCHRONIZE?: string;
    SQLITE_DATABASE_PATH?: string;
    JWT_EXPIRES_IN?: string;
    JWT_REFRESH_EXPIRES_IN?: string;
    S3_ACCESS_KEY?: string;
    S3_SECRET_KEY?: string;
    S3_BUCKET_NAME?: string;
    S3_ENDPOINT?: string;
    JWT_SECRET?: string;
    JWT_REFRESH_SECRET?: string;
    AUTH_SECRET?: string;
  }
}
