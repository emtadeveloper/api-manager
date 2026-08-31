"use client";

import { CreateUser, findAllUsers } from "@/app/actions/user.actions";

import { CreateDatabaseSettings, findAllDbSetting } from "@/app/actions/database-settings.action";

import { UserFieldsSchema } from "@/app/dto/user-form.schema";

import { DatabaseSettingSchema } from "@/app/dto/database-setting.dto";

import InitConfirm from "@/app/initialize/components/init-confirm";
import InitDb from "@/app/initialize/components/init-db";
import InitUser from "@/app/initialize/components/init-user";

import { CheckCircleFilled, FastBackwardOutlined, FastForwardFilled } from "@ant-design/icons";

import { Button, Steps } from "antd";

import { zodResolver } from "@hookform/resolvers/zod";

import { FormProvider, useForm } from "react-hook-form";

import { useEffect, useState } from "react";

import { z } from "zod";

import { yekan } from "@/public/fonts/font";

import useAlert from "@/hooks/useAlert";

import { extractErrorMessage } from "@/utils/extract-error-message";

import type { UserCreateDto } from "@/app/dto/user-create-dto";

const InitializeFormSchema = UserFieldsSchema.merge(DatabaseSettingSchema).refine(
  (data) => data.password === data.password2,
  {
    message: "رمز عبور و تکرار آن یکسان نیستند",
    path: ["password2"],
  },
);

type InitializeFormValues = z.infer<typeof InitializeFormSchema>;

const STORAGE_KEY = "settings-form";

const InitializeStep = () => {
  const alert = useAlert();

  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(false);

  const methods = useForm<InitializeFormValues>({
    resolver: zodResolver(InitializeFormSchema),

    mode: "onBlur",

    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      password2: "",

      dbType: "POSTGRES",
      dbServer: "",
      dbPort: "",
      dbUsername: "",
      dbPassword: "",
      dbName: "",
    },
  });

  const { handleSubmit, reset, watch } = methods;

  useEffect(() => {
    const saved = sessionStorage.getItem(STORAGE_KEY);

    if (saved) {
      try {
        const parsed: unknown = JSON.parse(saved);

        const result = InitializeFormSchema.safeParse(parsed);

        if (result.success) {
          reset(result.data);
        } else {
          sessionStorage.removeItem(STORAGE_KEY);
        }
      } catch {
        sessionStorage.removeItem(STORAGE_KEY);
      }

      return;
    }

    const getData = async () => {
      const [userResult, dbResult] = await Promise.all([findAllUsers(), findAllDbSetting()]);

      const dbType =
        dbResult?.data?.dbType === "SQL" || dbResult?.data?.dbType === "ORACLE" || dbResult?.data?.dbType === "POSTGRES"
          ? dbResult.data.dbType
          : "POSTGRES";

      reset({
        firstName: userResult?.data?.firstName ?? "",

        lastName: userResult?.data?.lastName ?? "",

        username: userResult?.data?.username ?? "",

        password: "",

        password2: "",

        dbType,

        dbServer: dbResult?.data?.dbServer ?? "",

        dbPort: dbResult?.data?.dbPort ?? "",

        dbUsername: dbResult?.data?.dbUsername ?? "",

        dbPassword: dbResult?.data?.dbPassword ?? "",

        dbName: dbResult?.data?.dbName ?? "",
      });
    };

    void getData();
  }, [reset]);

  useEffect(() => {
    const subscription = watch((values) => {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(values));
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [watch]);

  const next = () => {
    setCurrent((current) => Math.min(current + 1, 2));
  };

  const prev = () => {
    setCurrent((current) => Math.max(current - 1, 0));
  };

  const onSubmit = async (values: InitializeFormValues) => {
    setLoading(true);

    try {
      const user: UserCreateDto = {
        firstName: values.firstName,
        lastName: values.lastName,
        username: values.username,
        password: values.password,
      };

      const userResult = await CreateUser(user);

      if (!userResult.success) {
        alert.error(extractErrorMessage(userResult, "خطا در ثبت کاربر"));

        return;
      }

      const dbResult = await CreateDatabaseSettings({
        dbType: values.dbType,
        dbServer: values.dbServer,
        dbPort: values.dbPort,
        dbUsername: values.dbUsername,
        dbPassword: values.dbPassword,
        dbName: values.dbName,
      });

      if (!dbResult.success) {
        alert.error(extractErrorMessage(dbResult, "خطا در ثبت تنظیمات دیتابیس"));

        return;
      }

      alert.success("راه‌اندازی اولیه با موفقیت انجام شد");

      sessionStorage.removeItem(STORAGE_KEY);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Steps
          className={`step ${yekan.className}`}
          current={current}
          items={[{ title: "تعریف کاربر سیستم" }, { title: "تنظیمات اتصال" }, { title: "تایید نهایی" }]}
        />

        <div className="my-2">
          {current > 0 && (
            <Button title="قبلی" onClick={prev}>
              <FastForwardFilled />
            </Button>
          )}

          {current <= 1 && (
            <Button title="بعدی" onClick={next}>
              <FastBackwardOutlined />
            </Button>
          )}

          {current > 1 && (
            <Button loading={loading} htmlType="submit" title="تایید نهایی" type="primary">
              <CheckCircleFilled />
            </Button>
          )}
        </div>

        {current === 0 && <InitUser />}
        {current === 1 && <InitDb />}
        {current === 2 && <InitConfirm />}
      </form>
    </FormProvider>
  );
};

export default InitializeStep;
