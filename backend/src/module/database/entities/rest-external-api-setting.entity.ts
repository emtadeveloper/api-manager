import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

import { RestExternalApiParamEntity } from "./rest-external-api-param.entity";
import { RestServiceEntity } from "./rest-service.entity";

@Entity({ name: "rest_external_api_settings" })
export class RestExternalApiSettingEntity {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({ name: "base_url", type: "text", nullable: true }) baseUrl!: string | null;
  @Column({ name: "has_auth", type: "boolean", nullable: true }) hasAuth!: boolean | null;
  @Column({ name: "rest_service_ref" }) restServiceRef!: number;

  @OneToOne(() => RestServiceEntity, (service) => service.restExternalApiSetting, { onDelete: "CASCADE" })
  @JoinColumn({ name: "rest_service_ref" })
  restService!: RestServiceEntity;

  @OneToMany(() => RestExternalApiParamEntity, (param) => param.restExternalApi)
  restExternalApiParam!: RestExternalApiParamEntity[];
}
