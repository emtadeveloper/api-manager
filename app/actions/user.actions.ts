"use server";
import { UserCreateDto } from "../dto/user-create-dto";
import db from "@/lib/sqlite";
export const CreateUser = async (user: UserCreateDto) => {
  try {
    return await db.$transaction(async (tx) => {
      await tx.user.deleteMany();

      const newUser = await tx.user.create({
        data: user,
      });

      return { success: true as const, data: newUser };
    });
  } catch (error) {
    return {
      success: false as const,
      error: "خطا در ثبت تنظیمات" + (error as Error).message,
    };
  }
};

export const findAllUsers = async () => {
  try {
    const user = await db.user.findFirst();

    return { success: true as const, data: user };
  } catch (error) {
    return {
      sueccess: false as const,
      error: "خطا در فراخوانی" + (error as Error).message,
    };
  }
};
