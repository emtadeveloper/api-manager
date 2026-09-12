import { z } from "zod";

export const UserFieldsSchema = z.object({
  firstName: z.string().min(1, "نام الزامی است"),
  lastName: z.string().min(1, "نام خانوادگی الزامی است"),
  username: z.string().min(1, "نام کاربری الزامی است"),
  password: z.string().min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد"),
  password2: z.string().min(1, "لطفا تکرار رمز عبور را وارد کنید"),
});

export const UserFormSchema = UserFieldsSchema.refine(
  (data) => data.password === data.password2,
  {
    message: "رمز عبور و تکرار آن یکسان نیستند",
    path: ["password2"],
  },
);

export type UserFormValues = z.infer<typeof UserFormSchema>;
