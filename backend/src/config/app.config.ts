import { registerAs } from "@nestjs/config";

import { ConfigKeys } from "../common/enum/config-keys.enum";

export const AppConfig = registerAs(ConfigKeys.App, () => ({
  nodeEnv: process.env.NODE_ENV ?? "development",
  port: Number(process.env.PORT ?? 4000),
  frontendOrigin: process.env.FRONTEND_ORIGIN ?? "http://localhost:3000",
}));
