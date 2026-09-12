"use client";
import { Button } from "antd";
import { CreateUser } from "@/apis/backend";
import SectionCard from "@/components/SectionCard/SectionCard";
import RHFInput from "@/components/form/RHFInput";
import RHFPassword from "@/components/form/RHFPassword";
import useNotificationStore from "@/stores/notification";
import { extractErrorMessage } from "@/utils/extract-error-message";
import {
  UserFormSchema,
  type UserFormValues,
} from "@/app/dto/user-form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { UserCreateDto } from "@/app/dto/user-create-dto";

const UsersAdd = () => {
  const { setText, setError } = useNotificationStore();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const { control, handleSubmit } = useForm<UserFormValues>({
    resolver: zodResolver(UserFormSchema),
    mode: "onBlur",
  });

  const onSubmit = async (values: UserFormValues) => {
    setLoading(true);
    try {
      const result = await CreateUser({
        firstName: values.firstName,
        lastName: values.lastName,
        username: values.username,
        password: values.password,
      } as UserCreateDto);

      if (!result.success) {
        setError(extractErrorMessage(result, "خطا در ثبت عملیات"));
        return;
      }
      setText("عملیات با موفقیت انجام شد");
      router.push("/initialize");
      router.refresh();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid place-items-center min-h-full py-8">
      <div className="w-full max-w-2xl">
        <h1 className="app-text-primary text-lg font-semibold text-center mb-4">
          هیچ کاربری یافت نشد؛ لطفاً کاربر ادمین را ایجاد نمایید
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <SectionCard>
            <RHFInput control={control} name="firstName" label="نام" required />
            <RHFInput
              control={control}
              name="lastName"
              label="نام خانوادگی"
              required
            />
            <RHFInput
              control={control}
              name="username"
              label="نام کاربری"
              required
              dir="ltr"
            />
            <RHFPassword
              control={control}
              name="password"
              label="رمز عبور"
              required
            />
            <RHFPassword
              control={control}
              name="password2"
              label="تکرار رمز عبور"
              required
            />

            <div className="app-form-item--full">
              <Button htmlType="submit" type="primary" loading={loading} block>
                ثبت
              </Button>
            </div>
          </SectionCard>
        </form>
      </div>
    </div>
  );
};

export default UsersAdd;
