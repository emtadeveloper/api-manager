// dto/rest-external-api-setting.dto.ts
import { z } from "zod";
import { RestExternalApiParamDto } from "./rest-external-api-param.dto";

export const RestExternalApiSettingDto = z.object({
  baseUrl: z.string({error: "آدرس پایه الزامی است"}).min(1, "آدرس پایه الزامی است"),
  // authServiceUrl: z.string().min(1, "آدرس سرویس احراز هویت الزامی است"),
  // authUsername: z.string().min(1, "نام کاربری الزامی است"),
  // authPassword: z.string().min(1, "رمز عبور الزامی است"),
  // authUsernameParam: z.string().min(1),
  // authPasswordParam: z.string().min(1),
  hasAuth: z.boolean(),
  restExternalApiParam: z.array(RestExternalApiParamDto).optional(),
});

export type RestExternalApiSettingDto = z.infer<
  typeof RestExternalApiSettingDto
>;
