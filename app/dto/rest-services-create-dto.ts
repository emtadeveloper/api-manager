import { z } from "zod";
import { RestAuthServiceSettingDto } from "./rest-auth-service-setting-dto";
import { RestDatabaseSettingDto } from "./rest-database-setting-dto";
import { RestExternalApiSettingDto } from "./rest-external-api-setting.dto";

export const RestServicesCreateDto = z
  .object({
    persianName: z
      .string({ error: "نام فارسی الزامی است" })
      .min(1, "نام فارسی الزامی است"),
    latinName: z
      .string({ error: "نام لاتین الزامی است" })
      .min(1, "نام لاتین الزامی است"),
    httpMethod: z.enum(["GET", "POST"], { error: "متد فراخوانی الزامی است" }),
    restType: z.enum(["DATABASEDIRECT", "EXTERNALAPI"]),
    restAuthServiceSetting: RestAuthServiceSettingDto.nullable().optional(),
    restDatabaseSetting: RestDatabaseSettingDto.nullable().optional(),
    restExternalApiSetting: RestExternalApiSettingDto.nullable().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.restType === "DATABASEDIRECT" && !data.restDatabaseSetting) {
       const fields = [
        "dbType",
        "dbServer",
        "dbUsername",
        "dbPassword",
        "dbName",
        "dbViewName",
      ];
      
      fields.forEach((field) => {
        ctx.addIssue({
          code: "custom",
          message: "این فیلد الزامی است",
          path: ["restDatabaseSetting", field],
        });
      });
    }

    if (data.restType === "EXTERNALAPI" && !data.restExternalApiSetting) {
      const fields = [
        "baseUrl",
        "authServiceUrl",
        "authUsername",
        "authPassword",
        "authUsernameParam",
        "authPasswordParam",
      ];
      fields.forEach((field) => {
        ctx.addIssue({
          code: "custom",
          message: "این فیلد الزامی است",
          path: ["restExternalApiSetting", field],
        });
      });
    }
  });

export type RestServicesCreateDto = z.infer<typeof RestServicesCreateDto>;
