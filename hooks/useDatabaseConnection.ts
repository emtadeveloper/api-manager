"use client";

import { useCallback, useState } from "react";
import { DatabaseType } from "@/enums/database-type.enum";
import { getDatabases } from "@/app/actions/postgres/system-actions";
import { getDatabases as getSqlDatabases } from "@/app/actions/sql/system-actions";
import useAlert from "./useAlert";
import { extractErrorMessage } from "@/utils/extract-error-message";

// یونیون رشته‌ای منطبق با مقادیر enum (سازگار با z.enum(["SQL","ORACLE","POSTGRES"]) در DTOها)
export type DbTypeValue = `${DatabaseType}`;

export interface DbConnectionConfig {
  dbType: DbTypeValue;
  dbServer: string;
  dbPort: string;
  dbUsername: string;
  dbPassword: string;
}

function buildMasterConnectionUrl(config: DbConnectionConfig) {
  if (config.dbType === DatabaseType.POSTGRES) {
    return `postgresql://${config.dbUsername}:${config.dbPassword}@${config.dbServer}:${config.dbPort}/postgres`;
  }
  return `sqlserver://${config.dbServer}:${config.dbPort};database=Master;user=${config.dbUsername};password=${config.dbPassword};trustServerCertificate=true`;
}

export function buildTargetConnectionUrl(config: DbConnectionConfig & { dbName: string }) {
  if (config.dbType === DatabaseType.POSTGRES) {
    return `postgresql://${config.dbUsername}:${config.dbPassword}@${config.dbServer}:${config.dbPort}/${config.dbName}`;
  }
  return `sqlserver://${config.dbServer}:${config.dbPort};database=${config.dbName};user=${config.dbUsername};password=${config.dbPassword};trustServerCertificate=true`;
}

export default function useDatabaseConnection() {
  const alert = useAlert();
  const [databaseList, setDatabaseList] = useState<Record<string, string>[]>([]);
  const [loading, setLoading] = useState(false);

  const connect = useCallback(
    async (config: DbConnectionConfig) => {
      setLoading(true);
      try {
        const url = buildMasterConnectionUrl(config);
        const result = config.dbType === DatabaseType.POSTGRES ? await getDatabases(url) : await getSqlDatabases(url);

        if (!result.success) {
          alert.error(extractErrorMessage(result));
          return;
        }

        setDatabaseList(result.data as Record<string, string>[]);
      } finally {
        setLoading(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return { databaseList, loading, connect };
}
