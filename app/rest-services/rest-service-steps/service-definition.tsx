import { HttpMethod } from "@/types/enums/method.enum";
import { RestType } from "@/types/enums/rest-type.enum";
import { Form, Input, Radio } from "antd";

const SesrviceDefinition = () => {
  return (
    <div className="flex flex-wrap bg-gray-50 p-5! rounded-2xl border">
      <Form.Item name="persianName" label="نام فارسی وب سرویس" className="min-w-1/3 pl-2!">
        <Input />
      </Form.Item>

      <Form.Item name="latinName" label="نام لاتین وب سرویس" className="min-w-1/3 pl-2!">
        <Input />
      </Form.Item>

      <Form.Item name="httpMethod" label="متد فراخوانی" className="min-w-1/3 pl-2!">
        <Radio.Group>
          <Radio value={HttpMethod.GET}>GET</Radio>
          <Radio value={HttpMethod.POST}>POST</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item name="restType" label="نوع فراخوانی" className="min-w-1/3 pl-2!">
        <Radio.Group>
          <Radio value={RestType.DATABASEDIRECT}>اتصال مستقیم به دیتابیس</Radio>

          <Radio value={RestType.EXTERNALAPI}>فراخوانی وب سرویس خارجی</Radio>
        </Radio.Group>
      </Form.Item>
    </div>
  );
};

export default SesrviceDefinition;
