"use client";
import { Form, Input } from "antd";
import SectionCard from "@/components/ui/SectionCard";

const InitUser = () => {
  return (
    <SectionCard className="mb-2">
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
                return Promise.resolve();
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
    </SectionCard>
  );
};

export default InitUser;
