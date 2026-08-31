"use server";
import { DatabaseSettingDto } from "../dto/database-setting.dto";
import db from "@/lib/sqlite";
export const CreateDatabaseSettings = async (
  databaseSettings: DatabaseSettingDto,
) => {
  //   console.log (databaseSettings );
  // console.log("databaseSettings" + JSON.stringify(databaseSettings, null, 2));

  try {
    return await db.$transaction(async (tx) => {
      await tx.databaseSetting.deleteMany();

      const newDbSettings = await tx.databaseSetting.create({
        data: databaseSettings,
      });

      return { success: true as const, data: newDbSettings };
    });
  } catch (error) {
    return {
      success: false as const,
      error: "خطا در ثبت تنظیمات" + (error as Error).message,
    };
  }
};
export const findAllDbSetting = async () => {
  try {
    const databaseSetting = await db.databaseSetting.findFirst();

    return { success: true as const, data: databaseSetting };
  } catch (error) {
    return {
      sueccess: false as const,
      error: "خطا در فراخوانی" + (error as Error).message,
    };
  }
};
