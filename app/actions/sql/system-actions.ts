"use server";

import { DatabaseFactory } from "@/lib/DatabaseFactory";
import { DatabaseType } from "@/types/enums/database-type.enum";

export const checkConnection = async (inputUrl: string) => {
  console.log("SQL URL:", inputUrl);
  const db = await DatabaseFactory.create(DatabaseType.SQL, inputUrl);

  await db.initialize(inputUrl);
  return await db.checkConnection();
};

export const getDatabases = async (inputUrl: string) => {
  try {
    const db = await DatabaseFactory.create(DatabaseType.SQL, inputUrl);
    await db.initialize(inputUrl);

    // const pgClient = await postgresFactory.getPostgresClient();
    const databases = await db.query(`
  SELECT name
  FROM sys.databases
`);

    return { success: true as const, data: databases };
  } catch (error) {
    return {
      success: false as const,
      error: "خطا فراخوانی لیست دیتابیس" + (error as Error).message,
    };
  }
};
