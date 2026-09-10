import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { DatabaseSettingEntity } from "../database/entities/database-setting.entity";

export interface DatabaseSettingInput {
  dbType: string;
  dbServer: string;
  dbPort: string;
  dbUsername: string;
  dbPassword: string;
  dbName: string;
}

@Injectable()
export class DatabaseSettingsService {
  constructor(@InjectRepository(DatabaseSettingEntity) private readonly settings: Repository<DatabaseSettingEntity>) {}

  async replace(input: DatabaseSettingInput) {
    const current = (await this.settings.find({ order: { id: "ASC" }, take: 1 }))[0] ?? null;
    const setting = current ? this.settings.merge(current, input) : this.settings.create(input);
    return this.settings.save(setting);
  }

  findFirst() {
    return this.settings.find({ order: { id: "ASC" }, take: 1 }).then((settings) => settings[0] ?? null);
  }
}
