import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

import { RestAuthServiceParamEntity } from "./rest-auth-service-param.entity";
import { RestServiceEntity } from "./rest-service.entity";

@Entity({ name: "rest_auth_service_settings" })
export class RestAuthServiceSettingEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "auth_service_url", type: "text", nullable: true }) authServiceUrl!: string | null;
  @Column({ name: "auth_method", type: "text", nullable: true }) authMethod!: string | null;
  @Column({ name: "rest_service_ref" }) restServiceRef!: number;

  @OneToOne(() => RestServiceEntity, (service) => service.restAuthServiceSetting, { onDelete: "CASCADE" })
  @JoinColumn({ name: "rest_service_ref" })
  restService!: RestServiceEntity;

  @OneToMany(() => RestAuthServiceParamEntity, (param) => param.restAuthServiceSetting)
  restAuthServiceParam!: RestAuthServiceParamEntity[];
}
