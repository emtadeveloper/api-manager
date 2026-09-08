import { Injectable } from "@nestjs/common";

import { PrismaService } from "../database/prisma.service";

export interface CreateUserInput {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async replace(input: CreateUserInput) {
    return this.prisma.$transaction(async (transaction) => {
      await transaction.user.deleteMany();
      return transaction.user.create({ data: input });
    });
  }

  findFirst() {
    return this.prisma.user.findFirst();
  }
}
