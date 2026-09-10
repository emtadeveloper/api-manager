import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { hashPassword } from "../../common/utils/password.util";
import { UserEntity } from "../database/entities/user.entity";

export interface CreateUserInput {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

@Injectable()
export class UsersService {
  constructor(@InjectRepository(UserEntity) private readonly users: Repository<UserEntity>) {}

  async replace(input: CreateUserInput) {
    const firstUser = (await this.users.find({ order: { id: "ASC" }, take: 1 }))[0] ?? null;
    const password = await hashPassword(input.password);
    const user = firstUser
      ? this.users.merge(firstUser, { ...input, password })
      : this.users.create({ ...input, password });
    return this.users.save(user);
  }

  findFirst() {
    return this.users.find({
      order: { id: "ASC" },
      take: 1,
      select: { id: true, firstName: true, lastName: true, username: true },
    }).then((users) => users[0] ?? null);
  }
}
