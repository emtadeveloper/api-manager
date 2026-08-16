"use client";
import { HttpMethod } from "@/utils/method.enum";
import { RestType } from "@/utils/rest-type.enum";
import { Form, FormInstance, Input, Radio } from "antd";
import React from "react";
import ServiceDBSetting from "./service-db-setting";
import ServiceExternalApiSetting from "./service-external-api-setting";
interface Props {
  form: FormInstance;
}
const ServiceFinalize = ({ form }: Props) => {
  const values = form.getFieldsValue(true);
  const restType = values["restType"];
  return (
    <div className="flex flex-wrap bg-gray-50 p-5! rounded-2xl border">
      <Form.Item
        name="persianName"
        label="نام فارسی وب سرویس"
        className="min-w-1/3 pl-2!"
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="latinName"
        label="نام لاتین وب سرویس"
        className="min-w-1/3 pl-2!"
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="httpMethod"
        label="متد فراخوانی"
        className="min-w-1/3 pl-2!"
      >
        <Radio.Group>
          <Radio value={HttpMethod.GET}>GET</Radio>
          <Radio value={HttpMethod.POST}>POST</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        name="restType"
        label="نوع فراخوانی"
        className="min-w-1/3 pl-2!"
      >
        <Radio.Group>
          <Radio value={RestType.DATABASEDIRECT}>اتصال مستقیم به دیتابیس</Radio>

          <Radio value={RestType.EXTERNALAPI}>فراخوانی وب سرویس خارجی</Radio>
        </Radio.Group>
      </Form.Item>
      {/* <div className="flex flex-wrap bg-gray-50 p-5! rounded-2xl border">
        <Form.Item
          name={["restAuthServiceSetting", "authServiceUrl"]}
          label="سرویس احراز هویت"
          className="min-w-12/12 pl-2!"
        >
          <Input type="text" placeholder="آدرس کامل سرویس احراز هویت" />
        </Form.Item>
        <Form.Item
          label="نام کاربری"
          name={["restAuthServiceSetting", "authUsername"]}
          className="min-w-1/3 pl-2!"
        >
          <Input placeholder="نام کاربری" />
        </Form.Item>
        <Form.Item
          label="رمز عبور"
          name={["restAuthServiceSetting", "authPassword"]}
          className="min-w-1/3 pl-2!"
        >
          <Input type="password" placeholder="رمز عبور" />
        </Form.Item>
        <div className="w-full " />
        <Form.Item
          label="پارامتر نام کاربری"
          name={["restAuthServiceSetting", "authUsernameParam"]}
          className="min-w-1/3 pl-2!"
        >
          <Input placeholder="username" />
        </Form.Item>
        <Form.Item
          label="پارامتر رمز عبور"
          name={["restAuthServiceSetting", "authPasswordParam"]}
          className="min-w-1/3 pl-2!"
        >
          <Input type="text" placeholder="password" />
        </Form.Item>
      </div> */}

      <div>
        {/* <ul className="text-blue-500 flex flex-row gap-5 [&>li]:border [&>li]:p-2 [&>li]:rounded-xl mb-2">
        {restType && (
          <li>
            <strong>نوع ارتباط : </strong>
            {restType === RestType.DATABASEDIRECT
              ? "اتصال به دیتابیس"
              : "فراخوانی وب سرویس خارجی"}
          </li>
        )}

        {method && (
          <li>
            <strong>متد ارتباط : </strong>
            {method}
          </li>
        )}
      </ul> */}

        {restType &&
          (restType === RestType.DATABASEDIRECT ? <ServiceDBSetting form={form} /> : <ServiceExternalApiSetting form={form} />)}
      </div>
    </div>
  );
};

export default ServiceFinalize;
