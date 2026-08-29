"use client";
import { DatabaseSettingDto } from "@/app/dto/database-setting.dto";
import { DatabaseType } from "@/types/enums/database-type.enum";
import { SecurityScanFilled } from "@ant-design/icons";
import { Button, Form, FormInstance, Input, Radio, Select } from "antd";
import { useDatabaseConnection } from "@/hooks/useDatabaseConnection";

interface Props {
  form: FormInstance;
}

const InitDb = ({ form }: Props) => {
  const { databaseList, loading, handleGetDatabases } = useDatabaseConnection(
    () => form.getFieldsValue() as DatabaseSettingDto,
  );

  return (
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
      <Button
        loading={loading}
        icon={<SecurityScanFilled />}
        type="primary"
        className="w-full mb-2"
        onClick={() => handleGetDatabases()}
      >
        اتصال به دیتابیس
      </Button>
      <Form.Item label="نام دیتابیس" name="dbName" className="min-w-1/3 pl-2!">
        <Select
          allowClear
          showSearch
          placeholder=" دیتابیس را انتخاب نمایید..."
          options={databaseList.map((d) => ({
            value: Object.values(d)[0],
            label: Object.values(d)[0],
          }))}
        />
      </Form.Item>
    </div>
  );
};

export default InitDb;
