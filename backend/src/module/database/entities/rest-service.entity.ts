import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

import { RestAuthServiceSettingEntity } from "./rest-auth-service-setting.entity";
import { RestDatabaseSettingEntity } from "./rest-database-setting.entity";
import { RestExternalApiSettingEntity } from "./rest-external-api-setting.entity";

@Entity({ name: "rest_services" })
export class RestServiceEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "persian_name", type: "text", nullable: true })
  persianName!: string | null;

  @Column({ name: "latin_name", type: "text", nullable: true, unique: true })
  latinName!: string | null;

  @Column({ name: "http_method", type: "text", nullable: true })
  httpMethod!: string | null;

  @Column({ name: "rest_type", type: "text", nullable: true })
  restType!: string | null;

  @OneToOne(() => RestDatabaseSettingEntity, (setting) => setting.restService)
  restDatabaseSetting?: RestDatabaseSettingEntity | null;

  @OneToOne(() => RestExternalApiSettingEntity, (setting) => setting.restService)
  restExternalApiSetting?: RestExternalApiSettingEntity | null;

  @OneToOne(() => RestAuthServiceSettingEntity, (setting) => setting.restService)
  restAuthServiceSetting?: RestAuthServiceSettingEntity | null;
}
