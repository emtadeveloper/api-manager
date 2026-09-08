import { z } from "zod";

export const RestDatabaseSettingDto = z.object({
  dbType: z.enum(["SQL", "ORACLE", "POSTGRES"]),
  dbServer: z
    .string({ error: "این فیلد الزامی است" })
    .min(1, "سرور الزامی است"),
  dbPort: z.string({ error: "این فیلد الزامی است" }).min(1, "پورت الزامی است"),
  dbUsername: z
    .string({ error: "این فیلد الزامی است" })
    .min(1, "نام کاربری الزامی است"),
  dbPassword: z
    .string({ error: "این فیلد الزامی است" })
    .min(1, "رمز عبور الزامی است"),
  dbName: z.string({ error: "انتخاب  پایگاه داده الزامی است" }),

  dbViewName: z
    .string({ error: "این فیلد الزامی است" })
    .min(1, "نام ویو الزام یاست"),
});

export type RestDatabaseSettingDto = z.infer<typeof RestDatabaseSettingDto>;
