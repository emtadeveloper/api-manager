import { z } from "zod";
import { RestAuthServiceSettingDto } from "./rest-auth-service-setting-dto";
import { RestDatabaseSettingDto } from "./rest-database-setting-dto";
import { RestExternalApiSettingDto } from "./rest-external-api-setting.dto";

export const RestServicesCreateDto = z
  .object({
    persianName: z
      .string({ error: "نام فارسی الزامی است" })
      .trim()
      .min(1, "نام فارسی الزامی است"),
    latinName: z
      .string({ error: "نام لاتین الزامی است" })
      .trim()
      .min(1, "نام لاتین الزامی است"),
    httpMethod: z.enum(["GET", "POST"], { error: "متد فراخوانی الزامی است" }),
    restType: z.enum(["DATABASEDIRECT", "EXTERNALAPI"], {
      error: "نوع فراخوانی الزامی است",
    }),
    // These are validated below only when their service type is active.
    restAuthServiceSetting: z.unknown().nullable().optional(),
    restDatabaseSetting: z.unknown().nullable().optional(),
    restExternalApiSetting: z.unknown().nullable().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.restType === "DATABASEDIRECT") {
      const result = RestDatabaseSettingDto.safeParse(data.restDatabaseSetting);
      if (!result.success) {
        result.error.issues.forEach((issue) =>
          ctx.addIssue({
            ...issue,
            path: ["restDatabaseSetting", ...issue.path],
          }),
        );
      }
      return;
    }

    const externalResult = RestExternalApiSettingDto.safeParse(
      data.restExternalApiSetting,
    );
    if (!externalResult.success) {
      externalResult.error.issues.forEach((issue) =>
        ctx.addIssue({
          ...issue,
          path: ["restExternalApiSetting", ...issue.path],
        }),
      );
    }

    const external = data.restExternalApiSetting;
    if (
      typeof external === "object" &&
      external !== null &&
      "hasAuth" in external &&
      external.hasAuth
    ) {
      const authResult = RestAuthServiceSettingDto.safeParse(
        data.restAuthServiceSetting,
      );
      if (!authResult.success) {
        authResult.error.issues.forEach((issue) =>
          ctx.addIssue({
            ...issue,
            path: ["restAuthServiceSetting", ...issue.path],
          }),
        );
      }
    }
  });

export type RestServicesCreateDto = z.infer<typeof RestServicesCreateDto>;
