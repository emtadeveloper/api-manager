import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { RestAuthServiceSettingEntity } from "./rest-auth-service-setting.entity";

@Entity({ name: "rest_auth_service_param" })
export class RestAuthServiceParamEntity {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({ name: "param_type", type: "text", nullable: true }) paramType!: string | null;
  @Column({ name: "param_name", type: "text", nullable: true }) paramName!: string | null;
  @Column({ name: "param_value", type: "text", nullable: true }) paramValue!: string | null;
  @Column({ name: "rest_auth_service_ref" }) restAuthServiceSettingRef!: number;

  @ManyToOne(() => RestAuthServiceSettingEntity, (setting) => setting.restAuthServiceParam, { onDelete: "CASCADE" })
  @JoinColumn({ name: "rest_auth_service_ref" })
  restAuthServiceSetting!: RestAuthServiceSettingEntity;
}
