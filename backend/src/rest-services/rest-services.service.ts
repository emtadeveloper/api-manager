import { Injectable } from "@nestjs/common";
import { Prisma } from "../../generated/sqlite";

import { PrismaService } from "../database/prisma.service";
import type { RestServiceInput } from "./rest-services.types";

const includeRelations = {
  restAuthServiceSetting: { include: { restAuthServiceParam: true } },
  restDatabaseSetting: true,
  restExternalApiSetting: { include: { restExternalApiParam: true } },
} satisfies Prisma.RestServiceInclude;

@Injectable()
export class RestServicesService {
  constructor(private readonly prisma: PrismaService) {}

  async createOrUpdate(id: number | undefined, input: RestServiceInput) {
    const createData = this.buildCreateData(input);
    const updateData = this.buildUpdateData(input);

    if (id) {
      return this.prisma.restService.upsert({
        where: { id },
        create: createData,
        update: updateData,
        include: includeRelations,
      });
    }

    return this.prisma.restService.create({ data: createData, include: includeRelations });
  }

  findAll() {
    return this.prisma.restService.findMany();
  }

  findById(id: number) {
    return this.prisma.restService.findFirst({ where: { id }, include: includeRelations });
  }

  findByName(latinName: string) {
    return this.prisma.restService.findFirst({ where: { latinName }, include: includeRelations });
  }

  remove(id: number) {
    return this.prisma.restService.delete({ where: { id } });
  }

  private buildCreateData(input: RestServiceInput): Prisma.RestServiceCreateInput {
    return {
      persianName: input.persianName,
      latinName: input.latinName,
      httpMethod: input.httpMethod,
      restType: input.restType,
      ...(input.restAuthServiceSetting && {
        restAuthServiceSetting: {
          create: {
            authServiceUrl: input.restAuthServiceSetting.authServiceUrl,
            authMethod: input.restAuthServiceSetting.authMethod,
            restAuthServiceParam: { create: input.restAuthServiceSetting.restAuthServiceParam },
          },
        },
      }),
      ...(input.restDatabaseSetting && { restDatabaseSetting: { create: input.restDatabaseSetting } }),
      ...(input.restExternalApiSetting && {
        restExternalApiSetting: {
          create: {
            baseUrl: input.restExternalApiSetting.baseUrl,
            hasAuth: input.restExternalApiSetting.hasAuth,
            restExternalApiParam: { create: input.restExternalApiSetting.restExternalApiParam ?? [] },
          },
        },
      }),
    };
  }

  private buildUpdateData(input: RestServiceInput): Prisma.RestServiceUpdateInput {
    return {
      persianName: input.persianName,
      latinName: input.latinName,
      httpMethod: input.httpMethod,
      restType: input.restType,
      ...(input.restAuthServiceSetting && {
        restAuthServiceSetting: {
          upsert: {
            create: {
              authServiceUrl: input.restAuthServiceSetting.authServiceUrl,
              authMethod: input.restAuthServiceSetting.authMethod,
              restAuthServiceParam: { create: input.restAuthServiceSetting.restAuthServiceParam },
            },
            update: {
              authServiceUrl: input.restAuthServiceSetting.authServiceUrl,
              authMethod: input.restAuthServiceSetting.authMethod,
              restAuthServiceParam: {
                deleteMany: {},
                create: input.restAuthServiceSetting.restAuthServiceParam,
              },
            },
          },
        },
      }),
      ...(input.restDatabaseSetting && {
        restDatabaseSetting: {
          upsert: {
            create: input.restDatabaseSetting,
            update: input.restDatabaseSetting,
          },
        },
      }),
      ...(input.restExternalApiSetting && {
        restExternalApiSetting: {
          upsert: {
            create: {
              baseUrl: input.restExternalApiSetting.baseUrl,
              hasAuth: input.restExternalApiSetting.hasAuth,
              restExternalApiParam: { create: input.restExternalApiSetting.restExternalApiParam ?? [] },
            },
            update: {
              baseUrl: input.restExternalApiSetting.baseUrl,
              hasAuth: input.restExternalApiSetting.hasAuth,
              restExternalApiParam: {
                deleteMany: {},
                create: input.restExternalApiSetting.restExternalApiParam ?? [],
              },
            },
          },
        },
      }),
    };
  }
}
