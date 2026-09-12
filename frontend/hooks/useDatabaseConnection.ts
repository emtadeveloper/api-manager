"use client";

import { useCallback, useState } from "react";
import { DatabaseType } from "@/enums/database-type.enum";
import { getDatabases } from "@/apis/backend";
import useNotificationStore from "@/stores/notification";
import { extractErrorMessage } from "@/utils/extract-error-message";

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

export function buildTargetConnectionUrl(
  config: DbConnectionConfig & { dbName: string },
) {
  if (config.dbType === DatabaseType.POSTGRES) {
    return `postgresql://${config.dbUsername}:${config.dbPassword}@${config.dbServer}:${config.dbPort}/${config.dbName}`;
  }
  return `sqlserver://${config.dbServer}:${config.dbPort};database=${config.dbName};user=${config.dbUsername};password=${config.dbPassword};trustServerCertificate=true`;
}

export default function useDatabaseConnection() {
  const { setError } = useNotificationStore();
  const [databaseList, setDatabaseList] = useState<Record<string, string>[]>(
    [],
  );
  const [loading, setLoading] = useState(false);

  const connect = useCallback(
    async (config: DbConnectionConfig) => {
      setLoading(true);
      try {
        const url = buildMasterConnectionUrl(config);
        const result = await getDatabases(config.dbType, url);

        if (!result.success) {
          setError(extractErrorMessage(result));
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
