"use client";
import { getDatabases } from "@/app/actions/postgres/system-actions";
import { getDatabases as getSqlDatabase } from "@/app/actions/sql/system-actions";
import { DatabaseSettingDto } from "@/app/dto/database-setting.dto";
import { DatabaseType } from "@/types/enums/database-type.enum";
import { CameraFilled, SecurityScanFilled } from "@ant-design/icons";
import { Button, Form, FormInstance, Input, message, Modal, Radio, Select } from "antd";
import { useState } from "react";
import { object } from "zod";
import RestShowDatabaseCallData from "../components/database-call/rest-database-call-data";
import { getViewData } from "@/app/actions/postgres/get-view-data";
interface Props {
  form: FormInstance;
}
const ServiceDbSetting = ({ form }: Props) => {
  const [databaseList, setDatabaseList] = useState<Record<string, string>[]>([]);
  const [showData, setShowData] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingViewData, setLoadingViewData] = useState<boolean>(false);
  const handleGetDatabases = async () => {
    setLoading(true);
    const config = form?.getFieldValue("restDatabaseSetting") as DatabaseSettingDto;
    let url = "",
      result:
        | {
            success: true;
            data: unknown[];
            error?: undefined;
          }
        | {
            success: false;
            error: string;
            data?: undefined;
          };

    if (config.dbType === DatabaseType.POSTGRES) {
      url = `postgresql://${config.dbUsername}:${config.dbPassword}@${config.dbServer}:${config.dbPort}/postgres`;
      result = await getDatabases(url);
    } else {
      const url = `sqlserver://${config.dbServer}:${config.dbPort};database=Master;user=${config.dbUsername};password=${config.dbPassword};trustServerCertificate=true`;
      result = await getSqlDatabase(url);
    }
    if (!result.success) message.error(result.error);
    else setDatabaseList(result.data as Record<string, string>[]);

    console.log(result.data);
    setLoading(false);
  };
  const [viewData, setViewData] = useState<Record<string, unknown>[]>([]);
  const handleGetViewData = async () => {
    setLoadingViewData(true);
    const config = form?.getFieldValue("restDatabaseSetting") as DatabaseSettingDto & { dbViewName: string };
    let url = "",
      result:
        | {
            success: boolean;
            data: unknown[];
            error?: undefined;
          }
        | {
            success: boolean;
            error: string;
            data?: undefined;
          };

    if (config.dbType === DatabaseType.POSTGRES) {
      url = `postgresql://${config.dbUsername}:${config.dbPassword}@${config.dbServer}:${config.dbPort}/${config.dbName}`;

      result = await getViewData(url, config.dbViewName);
    } else {
      const url = `sqlserver://${config.dbServer}:${config.dbPort};database=${config.dbName};user=${config.dbUsername};password=${config.dbPassword};trustServerCertificate=true`;
      result = await getViewData(url, config.dbViewName);
    }
    if (!result.success) {
      message.error(result.error);
      setShowData(false);
    } else {
      setShowData(true);
      setViewData(result.data as Record<string, unknown>[]);
    }
    // else setDatabaseList(result.data as Record<string, string>[]);

    console.log(result.data);
    setLoadingViewData(false);
  };
  return (
    <div className="flex flex-wrap bg-gray-50 p-5! rounded-2xl border">
      <Form.Item label="نوع دیتابیس" name={["restDatabaseSetting", "dbType"]} className="min-w-1/3 pl-2!">
        <Radio.Group>
          <Radio value={DatabaseType.SQL}>SQL</Radio>
          <Radio value={DatabaseType.ORACLE}>ORACLEL</Radio>
          <Radio value={DatabaseType.POSTGRES}>POSTGRES</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="آدرس سرور دیتابیس" name={["restDatabaseSetting", "dbServer"]} className="min-w-1/3 pl-2!">
        <Input placeholder="آدرس سرور دیتابیس" />
      </Form.Item>
      <Form.Item label="پورت" name={["restDatabaseSetting", "dbPort"]} className="min-w-1/3 pl-2!">
        <Input placeholder="پورت" />
      </Form.Item>
      <Form.Item label="نام کاربری" name={["restDatabaseSetting", "dbUsername"]} className="min-w-1/3 pl-2!">
        <Input placeholder="نام کاربری" />
      </Form.Item>
      <Form.Item label="رمز عبور" name={["restDatabaseSetting", "dbPassword"]} className="min-w-1/3 pl-2!">
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
      <Form.Item label="نام دیتابیس" name={["restDatabaseSetting", "dbName"]} className="min-w-1/3 pl-2!">
        <Select
          allowClear
          showSearch
          placeholder=" دیتابیس را انتخاب نمایید..."
          options={databaseList.map((d) => ({
            value: Object.values(d)[0],
            label: Object.values(d)[0],
          }))}
          // optionFilterProp="label"
        />
      </Form.Item>
      <Form.Item label="نام ویو" name={["restDatabaseSetting", "dbViewName"]} className="min-w-1/3 pl-2!">
        <Input placeholder="نام ویو" />
      </Form.Item>

      <Button
        loading={loadingViewData}
        type="primary"
        icon={<CameraFilled />}
        onClick={async () => {
          await handleGetViewData();
        }}
      >
        نمایش اطلاعات
      </Button>

      <Modal title="نمایش اطلاعات" open={showData} onCancel={() => setShowData(false)} width="90%" footer={false}>
        <RestShowDatabaseCallData data={viewData} />
      </Modal>
    </div>
  );
};

export default ServiceDbSetting;
