import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "database_settings" })
export class DatabaseSettingEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "db_type", type: "text", nullable: true })
  dbType!: string | null;

  @Column({ name: "db_server", type: "text", nullable: true })
  dbServer!: string | null;

  @Column({ name: "db_port", type: "text", nullable: true })
  dbPort!: string | null;

  @Column({ name: "db_username", type: "text", nullable: true })
  dbUsername!: string | null;

  @Column({ name: "db_password", type: "text", nullable: true, select: false })
  dbPassword!: string | null;

  @Column({ name: "db_name", type: "text", nullable: true })
  dbName!: string | null;
}
