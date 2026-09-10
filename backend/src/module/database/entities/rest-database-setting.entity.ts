import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

import { RestServiceEntity } from "./rest-service.entity";

@Entity({ name: "rest_database_settings" })
export class RestDatabaseSettingEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "db_type", type: "text", nullable: true }) dbType!: string | null;
  @Column({ name: "db_server", type: "text", nullable: true }) dbServer!: string | null;
  @Column({ name: "db_port", type: "text", nullable: true }) dbPort!: string | null;
  @Column({ name: "db_username", type: "text", nullable: true }) dbUsername!: string | null;
  @Column({ name: "db_password", type: "text", nullable: true, select: false }) dbPassword!: string | null;
  @Column({ name: "db_name", type: "text", nullable: true }) dbName!: string | null;
  @Column({ name: "db_view_name", type: "text", nullable: true }) dbViewName!: string | null;

  @Column({ name: "rest_service_ref" }) restServiceRef!: number;

  @OneToOne(() => RestServiceEntity, (service) => service.restDatabaseSetting, { onDelete: "CASCADE" })
  @JoinColumn({ name: "rest_service_ref" })
  restService!: RestServiceEntity;
}
