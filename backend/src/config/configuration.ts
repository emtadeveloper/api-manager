import { AppConfig } from "./app.config";
import { DbConfig } from "./db.config";
import { JwtConfig } from "./jwt.config";

export { AppConfig, DbConfig, JwtConfig };
export { ConfigKeys } from "../common/enum/config-keys.enum";

export const configurations = [AppConfig, DbConfig, JwtConfig];

export function validateEnvironment(config: Record<string, unknown>) {
  const secret = config.JWT_SECRET ?? config.AUTH_SECRET;
  if (typeof secret !== "string" || secret.length < 32) {
    throw new Error("JWT_SECRET یا AUTH_SECRET باید حداقل ۳۲ کاراکتر باشد");
  }

  if (
    config.PORT !== undefined &&
    (!/^\d+$/.test(String(config.PORT)) || Number(config.PORT) < 1 || Number(config.PORT) > 65535)
  ) {
    throw new Error("PORT نامعتبر است");
  }

  return config;
}
