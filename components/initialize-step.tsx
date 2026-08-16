"use client";

import { CreateUser, findAllUsers } from "@/app/actions/user.actions";
import {
  CreateDatabaseSettings,
  findAllDbSetting,
} from "@/app/actions/database-settings.action";
import { getDatabases } from "@/app/actions/postgres/system-actions";
import { DatabaseSettingDto } from "@/app/dto/database-setting.dto";
import { RestServicesCreateDto } from "@/app/dto/rest-services-create-dto";
import { UserCreateDto } from "@/app/dto/user-create-dto";
import InitConfirm from "@/app/initialize/components/init-confirm";
import InitDb from "@/app/initialize/components/init-db";
import InitUser from "@/app/initialize/components/init-user";

import { yekan } from "@/fonts/font";
import { getChangedFieldPaths } from "@/utils/get-changed-field-paths";
import {
  CheckCircleFilled,
  FastBackwardOutlined,
  FastForwardFilled,
} from "@ant-design/icons";
import { Button, Form, message, Steps } from "antd";
import { useForm } from "antd/es/form/Form";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const InitializeStep = () => {
  const param = useParams();
  const [current, setCurrent] = useState<number>(0);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    const formValues = form.getFieldsValue();
    setLoading(true);

    const userResult = await CreateUser({
      firstName: formValues["firstName"],
      lastName: formValues["lastName"],
      username: formValues["username"],
      password: formValues["password"],
    } as UserCreateDto);

    if (!userResult.success) {
      message.error("خطا" + userResult.error);
      return;
    }
    message.success("ثبت موفق کاربر");
    const dbResult = await CreateDatabaseSettings({
      dbServer: formValues["dbServer"],
      dbType: formValues["dbType"],
      dbPort: formValues["dbPort"],
      dbName: formValues["dbName"],
      dbUsername: formValues["dbUsername"],
      dbPassword: formValues["dbPassword"],
    } as DatabaseSettingDto);

    if (!dbResult.success) {
      message.error("خطا" + dbResult.error);
      return;
    }
    message.success("ثبت موفق تنظیمات دیتابیس");
    setLoading(false);
  };
  const next = async () => {
    // console.log(form.getFieldsValue())
    setCurrent((c) => c + 1);
  };
  const prev = () => setCurrent((c) => (c >= 1 ? c - 1 : c));
  const [form] = useForm();
  const [restService, setRestService] = useState<RestServicesCreateDto>();
  useEffect(() => {
    const saved = sessionStorage.getItem("settings-form");
    if (saved) {
      form.setFieldsValue(JSON.parse(saved));
    }
    const getData = async () => {
      const user = await findAllUsers();
      const dbSetting = await findAllDbSetting();
      form.setFieldsValue({ ...user?.data, ...dbSetting?.data });
      // form.setFieldsValue({...user, ...dbSetting});
    };

    getData();
    // findRest(param.id?.toString() ?? "0");
  }, [form]);

  return (
    <Form
      form={form}
      onFinish={handleSubmit}
      preserve={true}
      onValuesChange={(changedValues) => {
        const values = form.getFieldsValue(true);
        sessionStorage.setItem("rest-service-form", JSON.stringify(values));
        const paths = getChangedFieldPaths(changedValues);
        form.setFields(paths.map((name) => ({ name, errors: [] })));
      }}
    >
      <Steps

        className={`step ${yekan.className}`}
        current={current}
        // onChange={(step) => setCurrent(step)}
        items={[
          { title: "تعریف کاربر سیستم" },
          //   { title: "تنظیمات احراز هویت" },
          { title: "تنظیمات اتصال" },
          { title: "تایید نهایی" },
        ]}
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
          <Button loading={loading} htmlType="submit" title="تایید نهایی">
            <CheckCircleFilled />
          </Button>
        )}
      </div>

      {current === 0 && <InitUser />}
      {current === 1 && <InitDb form={form} />}
      {/* {current === 2 && <InitAuth form={form} />} */}
      {current === 2 && <InitConfirm form={form} />}
    </Form>
  );
};

export default InitializeStep;
