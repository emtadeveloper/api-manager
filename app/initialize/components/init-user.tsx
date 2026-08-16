"use client";
import { Form, Input } from "antd";
const InitUser = () => {
  const [form] = Form.useForm();
  // const handleSaveUser = async () => {
  //   const formValues = form.getFieldsValue();
  //   const result = await CreateUser({
  //     firstName: formValues["firstName"],
  //     lastName: formValues["lastName"],
  //     username: formValues["username"],
  //     password: formValues["password"],
  //   } as UserCreateDto);

  //   if (!result.success) message.error(result.error);
  //   message.success("ثبت موفق");
  // };
  return (
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
      <Form.Item
        className="min-w-1/3 pl-2!"
        label="نام خانوادگی "
        name="lastName"
      >
        <Input />
      </Form.Item>
      <Form.Item
        className="min-w-1/3 pl-2!"
        label="نام کاربری "
        name="username"
      >
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

      {/* <Button
        onClick={() => handleSaveUser}
        type="primary"
        className="w-full "
      ></Button> */}
      {/* </Form> */}
    </div>
  );
};

export default InitUser;
