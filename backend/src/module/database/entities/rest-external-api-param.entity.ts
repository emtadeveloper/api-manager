import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { RestExternalApiSettingEntity } from "./rest-external-api-setting.entity";

@Entity({ name: "rest_external_api_param" })
export class RestExternalApiParamEntity {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({ name: "param_type", type: "text", nullable: true }) paramType!: string | null;
  @Column({ name: "param_name", type: "text", nullable: true }) paramName!: string | null;
  @Column({ name: "param_value", type: "text", nullable: true }) paramValue!: string | null;
  @Column({ name: "rest_external_api_ref" }) restExternalApiRef!: number;

  @ManyToOne(() => RestExternalApiSettingEntity, (setting) => setting.restExternalApiParam, { onDelete: "CASCADE" })
  @JoinColumn({ name: "rest_external_api_ref" })
  restExternalApi!: RestExternalApiSettingEntity;
}
