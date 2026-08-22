"use server";
import { DatabaseFactory } from "@/lib/DatabaseFactory";
import { DatabaseType } from "@/types/enums/database-type.enum";

export const getViewData = async (inputUrl: string, viewName: string) => {
  try {
    const db = await DatabaseFactory.create(DatabaseType.POSTGRES, inputUrl);
    const sql = `SELECT * FROM "${viewName}"`;

    const result = await db.query(sql);
    return { success: true, data: result };
  } catch (error) {
    return {
      success: false,
      error: "خطا در فراخوانی اطلاعات " + (error as Error).message,
    };
  }
};
