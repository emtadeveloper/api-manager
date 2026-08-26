"use client";

import { useState } from "react";
import { Button, Card } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import { useForm, Controller } from "react-hook-form";
import InputTypeBase from "@/components/input/InputTypeBase";

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
    <div className="min-h-screen flex items-center justify-center bg-app-background p-4">
      <Card className="w-full max-w-md shadow-app-shadow-md border-app-border p-6 sm:p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-app-text-primary">ورود به سیستم </h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-14">
          <div>
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
                  placeholder="ایمیل یا نام کاربری را وارد کنید"
                  className="w-full"
                  label="ایمیل یا نام کاربری"
                  required
                  error={errors.email?.message}
                />
              )}
            />
          </div>

          <div>
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
                  placeholder="رمز عبور خود را وارد کنید"
                  className="w-full"
                  label="رمز عبور"
                  required
                  error={errors.password?.message}
                />
              )}
            />
          </div>

          <div className="mt-14">
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              icon={<LoginOutlined />}
              className="w-full h-12 text-base font-semibold"
            >
              ورود
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
