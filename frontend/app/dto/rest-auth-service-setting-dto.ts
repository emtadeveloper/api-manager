import { z } from "zod";
import { RestAuthServiceParamDto } from "./rest_auth_service_param.dto";
import { AuthType } from "@/enums/auth-type.enum";

export const RestAuthServiceSettingDto = z.object({
  authServiceUrl: z.string("این فیلد الزامی است"),
  authMethod: z.enum([AuthType.API_KEY, AuthType.JWT]),
  // authUsername: z.string().min(1, "نام کاربری الزامی است"),
  // authPassword: z.string().min(1, "رمز عبور الزامی است"),
  // authUsernameParam: z.string().min(1).min(1, "پارامتر احراز هویت الزامی است"),
  // authPasswordParam: z.string().min(1).min(1, "پارامتر احراز هویت الزامی است"),
  restAuthServiceParam: z.array(RestAuthServiceParamDto),
});

export type RestAuthServiceSettingDto = z.infer<
  typeof RestAuthServiceSettingDto
>;
