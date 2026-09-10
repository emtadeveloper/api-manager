import { createHash } from "node:crypto";
import { registerAs } from "@nestjs/config";

import { ConfigKeys } from "../common/enum/config-keys.enum";

export const JwtConfig = registerAs(ConfigKeys.Jwt, () => {
  const accessTokenSecret = process.env.JWT_SECRET ?? process.env.AUTH_SECRET;

  return {
    accessTokenSecret,
    refreshTokenSecret:
      process.env.JWT_REFRESH_SECRET ??
      (accessTokenSecret ? createHash("sha256").update(`${accessTokenSecret}:refresh`).digest("hex") : undefined),
    accessTokenExpiresIn: process.env.JWT_EXPIRES_IN ?? "1d",
    refreshTokenExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN ?? "7d",
  };
});
