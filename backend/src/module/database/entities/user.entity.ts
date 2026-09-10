import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "users" })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "firstName", type: "text", nullable: true })
  firstName!: string | null;

  @Column({ name: "lastName", type: "text", nullable: true })
  lastName!: string | null;

  @Column({ name: "username", type: "text", nullable: true })
  username!: string | null;

  @Column({ name: "password", type: "text", nullable: true, select: false })
  password!: string | null;
}
