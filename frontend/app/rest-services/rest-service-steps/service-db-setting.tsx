"use client";
import { getViewData } from "@/apis/backend";
import { CameraFilled, SecurityScanFilled } from "@ant-design/icons";
import { Button, Modal, Radio } from "antd";
import { useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import SectionCard from "@/components/ui/SectionCard";
import RHFInput from "@/components/form/RHFInput";
import RHFPassword from "@/components/form/RHFPassword";
import RHFRadioGroup from "@/components/form/RHFRadioGroup";
import RHFSelect from "@/components/form/RHFSelect";
import useAlert from "@/hooks/useAlert";
import useDatabaseConnection, { buildTargetConnectionUrl, DbConnectionConfig } from "@/hooks/useDatabaseConnection";
import { extractErrorMessage } from "@/utils/extract-error-message";
import { DatabaseType } from "@/enums/database-type.enum";
import RestShowDatabaseCallData from "../components/database-call/rest-database-call-data";

const ServiceDbSetting = () => {
  const { control, getValues } = useFormContext();
  const alert = useAlert();
  const { databaseList, loading, connect } = useDatabaseConnection();
  const dbType = useWatch({ control, name: "restDatabaseSetting.dbType" });

  const [showData, setShowData] = useState(false);
  const [loadingViewData, setLoadingViewData] = useState(false);
  const [viewData, setViewData] = useState<Record<string, unknown>[]>([]);

  const handleGetDatabases = () => {
    const config = getValues("restDatabaseSetting") as DbConnectionConfig;
    connect(config);
  };

  const handleGetViewData = async () => {
    setLoadingViewData(true);
    try {
      const config = getValues("restDatabaseSetting") as DbConnectionConfig & { dbName: string; dbViewName: string };
      const url = buildTargetConnectionUrl(config);
      const result = await getViewData(url, config.dbViewName);

      if (!result.success) {
        alert.error(extractErrorMessage(result));
        setShowData(false);
        return;
      }
      setViewData((result.data as Record<string, unknown>[]) ?? []);
      setShowData(true);
    } finally {
      setLoadingViewData(false);
    }
  };

  return (
    <SectionCard title="تنظیمات اتصال به پایگاه داده">
      <RHFRadioGroup control={control} name="restDatabaseSetting.dbType" label="نوع دیتابیس">
        <Radio value={DatabaseType.SQL}>SQL</Radio>
        <Radio value={DatabaseType.ORACLE}>ORACLE</Radio>
        <Radio value={DatabaseType.POSTGRES}>POSTGRES</Radio>
      </RHFRadioGroup>

      <RHFInput control={control} name="restDatabaseSetting.dbServer" label="آدرس سرور دیتابیس" required />
      <RHFInput control={control} name="restDatabaseSetting.dbPort" label="پورت" required />
      <RHFInput control={control} name="restDatabaseSetting.dbUsername" label="نام کاربری" required />
      <RHFPassword control={control} name="restDatabaseSetting.dbPassword" label="رمز عبور" required />

      <div className="app-form-item--full">
        <Button htmlType="button" loading={loading} icon={<SecurityScanFilled />} type="primary" onClick={handleGetDatabases}>
          اتصال به دیتابیس
        </Button>
      </div>

      <RHFSelect
        control={control}
        name="restDatabaseSetting.dbName"
        label="نام دیتابیس"
        required
        allowClear
        showSearch
        placeholder="دیتابیس را انتخاب نمایید..."
        options={databaseList.map((d) => ({ value: Object.values(d)[0], label: Object.values(d)[0] }))}
      />
      <RHFInput control={control} name="restDatabaseSetting.dbViewName" label="نام ویو" required />

      <div className="app-form-item--full">
        <Button htmlType="button" loading={loadingViewData} icon={<CameraFilled />} onClick={handleGetViewData} disabled={!dbType}>
          نمایش اطلاعات
        </Button>
      </div>

      <Modal
        title="نمایش اطلاعات"
        open={showData}
        onCancel={() => setShowData(false)}
        width="90%"
        footer={false}
        destroyOnHidden
      >
        <RestShowDatabaseCallData data={viewData} />
      </Modal>
    </SectionCard>
  );
};

export default ServiceDbSetting;
