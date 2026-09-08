import { Injectable } from "@nestjs/common";
import type { Request } from "express";

import { ExternalDatabaseService } from "../external-database/external-database.service";
import { RestServicesService } from "../rest-services/rest-services.service";

@Injectable()
export class GatewayService {
  constructor(
    private readonly services: RestServicesService,
    private readonly databases: ExternalDatabaseService,
  ) {}

  async execute(request: Request, path: string[]) {
    const [serviceName, ...remainingPath] = path;
    if (!serviceName) return this.failure(404, "سرویس پیدا نشد");

    const service = await this.services.findByName(serviceName);
    if (!service?.latinName) return this.failure(404, "خطا در یافتن سرویس");
    if (service.httpMethod !== request.method) return this.failure(405, "متد فراخوانی با تعریف سرویس همخوانی ندارد");

    if (service.restType === "DATABASEDIRECT") {
      const config = service.restDatabaseSetting;
      if (!config || !config.dbViewName) return this.failure(500, "تنظیمات دیتابیس سرویس پیدا نشد");

      const connectionString = this.buildConnectionString(config);
      const data = await this.databases.getViewData(config.dbType as "SQL" | "ORACLE" | "POSTGRES", connectionString, config.dbViewName);
      return { status: 200, success: true, data, message: "فراخوانی با موفقیت انجام شد" };
    }

    const config = service.restExternalApiSetting;
    if (!config?.baseUrl) return this.failure(500, "تنظیمات API خارجی سرویس پیدا نشد");

    const url = new URL(`${config.baseUrl.replace(/\/$/, "")}/${[serviceName, ...remainingPath].join("/")}`);
    for (const [key, value] of Object.entries(request.query)) {
      if (typeof value === "string") url.searchParams.set(key, value);
    }

    const response = await fetch(url, {
      method: request.method,
      headers: { "Content-Type": "application/json" },
      body: request.method === "GET" || request.method === "HEAD" ? undefined : JSON.stringify(request.body ?? {}),
    });

    const data = await this.readResponse(response);
    return { status: response.status, success: response.ok, data, message: response.ok ? "فراخوانی موفق" : "خطا در فراخوانی" };
  }

  private buildConnectionString(config: {
    dbType: string | null;
    dbServer: string | null;
    dbPort: string | null;
    dbUsername: string | null;
    dbPassword: string | null;
    dbName: string | null;
  }) {
    if (config.dbType === "POSTGRES") {
      return `postgresql://${config.dbUsername}:${config.dbPassword}@${config.dbServer}:${config.dbPort}/${config.dbName}`;
    }

    return `sqlserver://${config.dbServer}:${config.dbPort};database=${config.dbName};user=${config.dbUsername};password=${config.dbPassword};trustServerCertificate=true`;
  }

  private async readResponse(response: Response) {
    const text = await response.text();
    if (!text) return null;
    try {
      return JSON.parse(text) as unknown;
    } catch {
      return text;
    }
  }

  private failure(status: number, message: string) {
    return { status, success: false, data: [], message };
  }
}
