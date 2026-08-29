"use client";

import { useState } from "react";
import { useAlert } from "@/hooks/useAlert";
import { getDatabases } from "@/app/actions/postgres/system-actions";
import { getDatabases as getSqlDatabase } from "@/app/actions/sql/system-actions";
import { DatabaseSettingDto } from "@/app/dto/database-setting.dto";
import { DatabaseType } from "@/types/enums/database-type.enum";

export function useDatabaseConnection(getConfig: () => DatabaseSettingDto) {
  const { error } = useAlert();
  const [databaseList, setDatabaseList] = useState<Record<string, string>[]>([]);
  const [loading, setLoading] = useState(false);

  const handleGetDatabases = async () => {
    setLoading(true);

    const config = getConfig();

    const url =
      config.dbType === DatabaseType.POSTGRES
        ? `postgresql://${config.dbUsername}:${config.dbPassword}@${config.dbServer}:${config.dbPort}/postgres`
        : `sqlserver://${config.dbServer}:${config.dbPort};database=Master;user=${config.dbUsername};password=${config.dbPassword};trustServerCertificate=true`;

    const result = config.dbType === DatabaseType.POSTGRES ? await getDatabases(url) : await getSqlDatabase(url);

    if (!result.success) {
      error(result.error);
    } else {
      setDatabaseList(result.data as Record<string, string>[]);
    }

    setLoading(false);
  };

  return { databaseList, loading, handleGetDatabases };
}
