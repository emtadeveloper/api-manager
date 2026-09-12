import { z } from "zod";

export const DatabaseSettingSchema = z.object({
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

  dbName: z
    .string({ error: "انتخاب پایگاه داده الزامی است" })
    .min(1, "انتخاب پایگاه داده الزامی است"),
});

export type DatabaseSettingDto = z.infer<typeof DatabaseSettingSchema>;
