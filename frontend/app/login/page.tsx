"use client";

import { useTransition } from "react";

import { Button } from "antd";

import { LoginOutlined } from "@ant-design/icons";

import { Controller, useForm } from "react-hook-form";

import { useRouter } from "next/navigation";

import InputTypeBase from "@/components/input/InputTypeBase";

import { signIn } from "@/apis/apis";

import SideLogin from "./components/SideLogin";

import { useSessionStore } from "@/stores/auth";

import SettingsDrawer from "@/components/layout/Topbar/components/SettingsDrawer";
import useAlert from "@/hooks/useAlert";

interface LoginFormValues {
  username: string;
  password: string;
}

export default function LoginPage() {
  const [isPending, startTransition] = useTransition();
  const alert = useAlert();

  const refreshSession = useSessionStore((state) => state.refreshSession);

  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    defaultValues: {
      username: "admin@rasan.com",
      password: "Admin123!",
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    startTransition(async () => {
      const response = await signIn(data);

      if (response.isSuccess) {
        await refreshSession();
        router.replace("/rest-services");
        return;
      }

      alert.error(response.message ?? "ورود ناموفق بود");
    });
  };

  return (
    <div className="relative flex min-h-screen font-sans">
      <SideLogin />

      <div className="flex flex-1 items-center justify-center bg-[var(--app-surface)] p-8 sm:p-12">
        <div className="w-full max-w-sm space-y-10">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-[var(--app-text-primary)]">ورود به حساب کاربری</h2>

            <p className="text-sm text-[var(--app-text-muted)]">برای ورود اطلاعات خود را وارد کنید</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <Controller
              name="username"
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
                  placeholder="لطفا ایمیل یا نام کاربری را وارد کنید"
                  label="ایمیل یا نام کاربری"
                  required
                  error={errors.username?.message}
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
              loading={isPending}
              icon={<LoginOutlined />}
              iconPlacement="start"
              block
              size="large"
              className="login-submit-button"
            >
              ورود به سیستم
            </Button>
          </form>
        </div>
      </div>

      <div className="absolute top-4 left-3">
        <SettingsDrawer />
      </div>
    </div>
  );
}
