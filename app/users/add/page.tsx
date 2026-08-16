"use client";
import { Button, Form, Input, message } from "antd";
import { CreateUser } from "@/app/actions/user.actions";
const UsersAdd = () => {
  const [form] = Form.useForm();
  return (
    <div className="grid place-items-center">
      <h1>هیج کاربری یافت نشد لطفا کاربر ادمین را ایجاد نمایید!</h1>

      <Form
        form={form}
        onFinish={() => {
          const values = form.getFieldsValue();
          try {
            CreateUser(values);
            message.success("عملیات با موفقیت انجام شد");
            window.location.reload();
          } catch (error) {
            message.error("خطا در ثبت عملیات" + (error as Error).message);
          }
        }}
        className="flex flex-wrap bg-gray-50 p-5! w-1/2  rounded-2xl border m-5!"
      >
        <Form.Item label="نام " name="firstName">
          <Input />
        </Form.Item>
        <Form.Item label="نام خانوادگی " name="lastName">
          <Input />
        </Form.Item>
        <Form.Item label="نام کاربری " name="username">
          <Input />
        </Form.Item>
        <Form.Item label="رمز عبور " name="password">
          <Input.Password />
        </Form.Item>
        <Form.Item
          dependencies={["password"]}
          rules={[
            { required: true, message: "لطفا تکرار رمز عبور را وارد کنید" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve(); // matches — valid
                }
                return Promise.reject(
                  new Error("رمز عبور و تکرار آن یکسان نیستند"),
                );
              },
            }),
          ]}
          label="تکرار رمز عبور"
          name="password2"
        >
          <Input.Password type="password" />
        </Form.Item>

        <Button htmlType="submit" type="primary" className="w-full ">
          ثبت
        </Button>
      </Form>
    </div>
  );
};

export default UsersAdd;
