"use client";

import { useState } from "react";
import { Button } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import { useForm, Controller } from "react-hook-form";
import InputTypeBase from "@/components/input/InputTypeBase";
import SideLogin from "./components/SideLogin";

interface LoginFormValues {
  email: string;
  password: string;
}

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    setLoading(true);
    console.log("Login values:", data);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex min-h-screen font-sans">
      <SideLogin />
      <div className="flex-1 flex items-center justify-center p-8 sm:p-12 bg-[var(--app-surface)]">
        <div className="w-full max-w-sm space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold tracking-tight text-[var(--app-text-primary)]">ورود به حساب کاربری</h2>
            <p className="text-sm text-[var(--app-text-muted)]">برای ورود اطلاعات خود را وارد کنید</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <Controller
              name="email"
              control={control}
              rules={{
                required: "لطفاً ایمیل یا نام کاربری را وارد کنید",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "لطفاً یک ایمیل معتبر وارد کنید",
                },
              }}
              render={({ field }) => (
                <InputTypeBase
                  {...field}
                  type="text"
                  placeholder=" لطفا ایمیل یا نام کاربری را وارد کنید"
                  label="ایمیل یا نام کاربری"
                  required
                  error={errors.email?.message}
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              rules={{
                required: "لطفاً رمز عبور را وارد کنید",
                minLength: {
                  value: 6,
                  message: "رمز عبور باید حداقل ۶ کاراکتر باشد",
                },
              }}
              render={({ field }) => (
                <InputTypeBase
                  {...field}
                  type="password"
                  placeholder="لطفاً رمز عبور را وارد کنید"
                  label="رمز عبور"
                  required
                  error={errors.password?.message}
                />
              )}
            />

            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              icon={<LoginOutlined />}
              iconPlacement="start"
              block
              size="large"
              style={{
                padding: "0.75rem 1rem",
                fontSize: ".8rem",
                fontWeight: "500",
              }}
            >
              ورود به سیستم
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
