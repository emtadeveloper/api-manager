"use client";

import { DatabaseType } from "@/types/enums/database-type.enum";
import { Form, FormInstance, Input, Radio, Select } from "antd";
import React from "react";
interface Props {
  form: FormInstance;
}
const InitConfirm = ({ form }: Props) => {
  console.log(form.getFieldsValue());
  return (
    <>
      <div className="flex flex-wrap bg-gray-50 p-5! rounded-2xl border mb-2">
        {/* <Form
        form={form}
        onFinish={() => {
          const values = form.getFieldsValue();
          try {
            CreateUser(values);
            message.success("عملیات با موفقیت انجام شد");
            // window.location.reload();
          } catch (error) {
            message.error("خطا در ثبت عملیات" + (error as Error).message);
          }
        }}
        className="flex flex-wrap bg-gray-50 p-5! w-1/2  rounded-2xl border m-5!"
      > */}
        <Form.Item className="min-w-1/3 pl-2!" label="نام " name="firstName">
          <Input />
        </Form.Item>
        <Form.Item className="min-w-1/3 pl-2!" label="نام خانوادگی " name="lastName">
          <Input />
        </Form.Item>
        <Form.Item className="min-w-1/3 pl-2!" label="نام کاربری " name="username">
          <Input />
        </Form.Item>
        <Form.Item className="min-w-1/3 pl-2!" label="رمز عبور " name="password">
          <Input.Password />
        </Form.Item>
        <Form.Item
          className="min-w-1/3 pl-2!"
          dependencies={["password"]}
          rules={[
            { required: true, message: "لطفا تکرار رمز عبور را وارد کنید" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve(); // matches — valid
                }
                return Promise.reject(new Error("رمز عبور و تکرار آن یکسان نیستند"));
              },
            }),
          ]}
          label="تکرار رمز عبور"
          name="password2"
        >
          <Input.Password type="password" />
        </Form.Item>

        {/* <Button
        onClick={() => handleSaveUser}
        type="primary"
        className="w-full "
      ></Button> */}
        {/* </Form> */}
      </div>
      <div className="flex flex-wrap bg-gray-50 p-5! rounded-2xl border">
        <Form.Item label="نوع دیتابیس" name="dbType" className="min-w-1/3 pl-2!">
          <Radio.Group>
            <Radio value={DatabaseType.SQL}>SQL</Radio>
            <Radio value={DatabaseType.ORACLE}>ORACLEL</Radio>
            <Radio value={DatabaseType.POSTGRES}>POSTGRES</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="آدرس سرور دیتابیس" name="dbServer" className="min-w-1/3 pl-2!">
          <Input placeholder="آدرس سرور دیتابیس" />
        </Form.Item>
        <Form.Item label="پورت" name="dbPort" className="min-w-1/3 pl-2!">
          <Input placeholder="پورت" />
        </Form.Item>
        <Form.Item label="نام کاربری" name="dbUsername" className="min-w-1/3 pl-2!">
          <Input placeholder="نام کاربری" />
        </Form.Item>
        <Form.Item label="رمز عبور" name="dbPassword" className="min-w-1/3 pl-2!">
          <Input type="password" placeholder="رمز عبور" />
        </Form.Item>
        <Form.Item label="نام دیتابیس" name="dbName" className="min-w-1/3 pl-2!">
          <Select
            allowClear
            showSearch
            placeholder=" دیتابیس را انتخاب نمایید..."
            options={[
              { value: "db1", label: "db1" },
              { value: "db2", label: "db2" },
              { value: "db3", label: "db3" },
            ]}
          />
        </Form.Item>
      </div>
    </>
  );
};

export default InitConfirm;
