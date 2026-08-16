"use client";
import { PARAMTYPE } from "@/utils/param-type.enum";
import { DeleteFilled, PlusCircleFilled } from "@ant-design/icons";
import { Button, Form, Input, Radio } from "antd";
const AuthServiceParamAdd = () => {
  return (
    <div className="flex flex-col bg-gray-50 p-5! rounded-2xl border mb-2 mt-2  ">
      <Form.List name={["restAuthServiceSetting", "restAuthServiceParam"]}>
        {(fields, { add, remove }) => (
          <>
            <Button onClick={() => add()}>
              <PlusCircleFilled />
              ایجاد پارامتر
            </Button>
            <div className="flex flex-wrap   ">
              {fields.map((field) => (
                <div
                  key={field.key}
                  className=" border border-blue-300 m-1 px-4 w-2/12  rounded-xl  grow "
                >
                  <DeleteFilled
                    className="w-full   bg-red-50  rounded-2xl"
                    onClick={() => remove(field.name)}
                  />
                  <Form.Item name={[field.name, "paramName"]}>
                    <Input placeholder="نام پارامتر" />
                  </Form.Item>

                  <Form.Item name={[field.name, "paramValue"]}>
                    <Input placeholder="مقدار پارامتر" />
                  </Form.Item>

                  <Form.Item name={[field.name, "paramType"]}>
                    <Radio.Group>
                      <Radio value={PARAMTYPE.HEADER}>HEADER</Radio>
                      <Radio value={PARAMTYPE.BODY}>BODY</Radio>
                      <Radio value={PARAMTYPE.PATH}>PATH</Radio>
                      <Radio defaultChecked value={PARAMTYPE.QUERY}>
                        QUERY
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                </div>
              ))}
            </div>
          </>
        )}
      </Form.List>
    </div>
  );
};

export default AuthServiceParamAdd;
