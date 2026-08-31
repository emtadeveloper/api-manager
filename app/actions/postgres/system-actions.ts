"use server";

import { DatabaseFactory } from "@/lib/DatabaseFactory";
import { DatabaseType } from "@/enums/database-type.enum";

export const checkConnection = async (inputUrl: string) => {
  const db = await DatabaseFactory.create(DatabaseType.POSTGRES, inputUrl);

  await db.initialize(inputUrl);

  return await db.checkConnection();
};

export const getDatabases = async (inputUrl: string) => {
  try {
    const db = await DatabaseFactory.create(DatabaseType.POSTGRES, inputUrl);

    await db.initialize(inputUrl);

    const databases = await db.query(`
  SELECT datname
  FROM pg_database
  WHERE datistemplate = false;
`);
    return { success: true as const, data: databases };
  } catch (error) {
    return {
      success: false as const,
      error: "خطا فراخوانی لیست دیتابیس" + (error as Error).message,
    };
  }
};
