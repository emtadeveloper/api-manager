import { All, Controller, Req, Res } from "@nestjs/common";
import type { Request, Response } from "express";

import { GatewayService } from "./gateway.service";

@Controller("v1/gateway")
export class GatewayController {
  constructor(private readonly gateway: GatewayService) {}

  @All("*path")
  async execute(@Req() request: Request, @Res() response: Response) {
    const marker = "/api/v1/gateway/";
    const rawPath = request.originalUrl.split("?")[0].split(marker)[1] ?? "";
    const path = rawPath.split("/").filter(Boolean).map((part) => decodeURIComponent(part));
    const result = await this.gateway.execute(request, path);
    return response.status(result.status).json(result);
  }
}
