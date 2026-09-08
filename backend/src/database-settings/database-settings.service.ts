import { Injectable } from "@nestjs/common";

import { PrismaService } from "../database/prisma.service";

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
  constructor(private readonly prisma: PrismaService) {}

  async replace(input: DatabaseSettingInput) {
    return this.prisma.$transaction(async (transaction) => {
      await transaction.databaseSetting.deleteMany();
      return transaction.databaseSetting.create({ data: input });
    });
  }

  findFirst() {
    return this.prisma.databaseSetting.findFirst();
  }
}
