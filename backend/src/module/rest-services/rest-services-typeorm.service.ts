import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DataSource } from "typeorm";
import type { Repository } from "typeorm";

import { RestAuthServiceParamEntity } from "../database/entities/rest-auth-service-param.entity";
import { RestAuthServiceSettingEntity } from "../database/entities/rest-auth-service-setting.entity";
import { RestDatabaseSettingEntity } from "../database/entities/rest-database-setting.entity";
import { RestExternalApiParamEntity } from "../database/entities/rest-external-api-param.entity";
import { RestExternalApiSettingEntity } from "../database/entities/rest-external-api-setting.entity";
import { RestServiceEntity } from "../database/entities/rest-service.entity";
import type { RestServiceInput } from "./rest-services.types";

const relations = [
  "restAuthServiceSetting",
  "restAuthServiceSetting.restAuthServiceParam",
  "restDatabaseSetting",
  "restExternalApiSetting",
  "restExternalApiSetting.restExternalApiParam",
];

@Injectable()
export class RestServicesTypeOrmService {
  constructor(
    @InjectRepository(RestServiceEntity) private readonly services: Repository<RestServiceEntity>,
    private readonly dataSource: DataSource,
  ) {}

  async createOrUpdate(id: number | undefined, input: RestServiceInput) {
    return this.dataSource.transaction(async (manager) => {
      const service: RestServiceEntity = id
        ? (await manager.findOne(RestServiceEntity, { where: { id } })) ?? manager.create(RestServiceEntity)
        : manager.create(RestServiceEntity);
      if (!service) throw new NotFoundException("سرویس پیدا نشد");

      Object.assign(service, {
        persianName: input.persianName,
        latinName: input.latinName,
        httpMethod: input.httpMethod,
        restType: input.restType,
      });
      const saved = await manager.save(service);

      await manager.delete(RestAuthServiceSettingEntity, { restServiceRef: saved.id });
      await manager.delete(RestDatabaseSettingEntity, { restServiceRef: saved.id });
      await manager.delete(RestExternalApiSettingEntity, { restServiceRef: saved.id });

      if (input.restAuthServiceSetting) {
        const setting = await manager.save(manager.create(RestAuthServiceSettingEntity, {
          authServiceUrl: input.restAuthServiceSetting.authServiceUrl,
          authMethod: input.restAuthServiceSetting.authMethod,
          restServiceRef: saved.id,
        }));
        await manager.save(RestAuthServiceParamEntity, input.restAuthServiceSetting.restAuthServiceParam.map((param) => manager.create(RestAuthServiceParamEntity, { ...param, restAuthServiceSettingRef: setting.id })));
      }

      if (input.restDatabaseSetting) {
        await manager.save(manager.create(RestDatabaseSettingEntity, { ...input.restDatabaseSetting, restServiceRef: saved.id }));
      }

      if (input.restExternalApiSetting) {
        const setting = await manager.save(manager.create(RestExternalApiSettingEntity, {
          baseUrl: input.restExternalApiSetting.baseUrl,
          hasAuth: input.restExternalApiSetting.hasAuth,
          restServiceRef: saved.id,
        }));
        await manager.save(RestExternalApiParamEntity, (input.restExternalApiSetting.restExternalApiParam ?? []).map((param) => manager.create(RestExternalApiParamEntity, { ...param, restExternalApiRef: setting.id })));
      }

      return manager.findOne(RestServiceEntity, { where: { id: saved.id }, relations });
    });
  }

  findAll() { return this.services.find({ relations }); }
  findById(id: number) { return this.services.findOne({ where: { id }, relations }); }
  findByName(latinName: string) { return this.services.findOne({ where: { latinName }, relations }); }
  remove(id: number) { return this.services.delete(id); }
}
