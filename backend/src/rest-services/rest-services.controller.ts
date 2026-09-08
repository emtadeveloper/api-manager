import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards } from "@nestjs/common";
import { IsObject, IsOptional, IsString } from "class-validator";

import { SessionGuard } from "../auth/auth.guard";
import { RestServicesService } from "./rest-services.service";
import type { RestServiceInput } from "./rest-services.types";

class RestServiceDto implements RestServiceInput {
  @IsString()
  persianName!: string;

  @IsString()
  latinName!: string;

  @IsString()
  httpMethod!: string;

  @IsString()
  restType!: string;

  @IsOptional()
  @IsObject()
  restAuthServiceSetting?: RestServiceInput["restAuthServiceSetting"];

  @IsOptional()
  @IsObject()
  restDatabaseSetting?: RestServiceInput["restDatabaseSetting"];

  @IsOptional()
  @IsObject()
  restExternalApiSetting?: RestServiceInput["restExternalApiSetting"];
}

@UseGuards(SessionGuard)
@Controller("rest-services")
export class RestServicesController {
  constructor(private readonly services: RestServicesService) {}

  @Get()
  async findAll() {
    return { success: true, data: await this.services.findAll() };
  }

  @Get("by-name/:name")
  async findByName(@Param("name") name: string) {
    return { success: true, data: await this.services.findByName(name) };
  }

  @Get(":id")
  async findById(@Param("id", ParseIntPipe) id: number) {
    return { success: true, data: await this.services.findById(id) };
  }

  @Post()
  async create(@Body() body: RestServiceDto) {
    return { success: true, data: await this.services.createOrUpdate(undefined, body) };
  }

  @Post(":id")
  async update(@Param("id", ParseIntPipe) id: number, @Body() body: RestServiceDto) {
    return { success: true, data: await this.services.createOrUpdate(id, body) };
  }

  @Delete(":id")
  async remove(@Param("id", ParseIntPipe) id: number) {
    return { success: true, data: await this.services.remove(id) };
  }
}
