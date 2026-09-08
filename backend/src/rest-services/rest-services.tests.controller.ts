import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { IsObject, IsString } from "class-validator";

import { SessionGuard } from "../auth/auth.guard";

class AuthTestDto {
  @IsString()
  authServiceUrl!: string;
}

class ApiTestDto {
  @IsObject()
  apiDto!: { baseUrl: string };

  @IsString()
  serviceName!: string;
}

@UseGuards(SessionGuard)
@Controller("rest-services/tests")
export class RestServicesTestsController {
  @Post("auth")
  async auth(@Body() body: AuthTestDto) {
    try {
      const response = await fetch(body.authServiceUrl, { headers: { "Content-Type": "application/json" } });
      return { success: true, data: await response.json() };
    } catch (error) {
      return { success: false, error: `خطا در بازیابی اطلاعات ${(error as Error).message}` };
    }
  }

  @Post("api")
  async api(@Body() body: ApiTestDto) {
    try {
      const url = `${body.apiDto.baseUrl.replace(/\/$/, "")}/${body.serviceName}`;
      const response = await fetch(url, { cache: "no-store" });
      return { success: true, data: await response.json() };
    } catch (error) {
      return { success: false, error: `خطا در بازیابی اطلاعات ${(error as Error).message}` };
    }
  }
}
