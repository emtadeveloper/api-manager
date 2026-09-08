"use client";
import { DatabaseType } from "@/enums/database-type.enum";
import { SecurityScanFilled } from "@ant-design/icons";
import { Button, Radio } from "antd";
import SectionCard from "@/components/ui/SectionCard";
import RHFInput from "@/components/form/RHFInput";
import RHFPassword from "@/components/form/RHFPassword";
import RHFRadioGroup from "@/components/form/RHFRadioGroup";
import RHFSelect from "@/components/form/RHFSelect";
import useDatabaseConnection, { DbConnectionConfig } from "@/hooks/useDatabaseConnection";
import { useFormContext } from "react-hook-form";

const InitDb = () => {
  const { control, getValues } = useFormContext();
  const { databaseList, loading, connect } = useDatabaseConnection();

  const handleGetDatabases = () => {
    const values = getValues() as DbConnectionConfig;
    connect(values);
  };

  return (
    <SectionCard title="اتصال به پایگاه داده">
      <RHFRadioGroup control={control} name="dbType" label="نوع دیتابیس">
        <Radio value={DatabaseType.SQL}>SQL</Radio>
        <Radio value={DatabaseType.ORACLE}>ORACLE</Radio>
        <Radio value={DatabaseType.POSTGRES}>POSTGRES</Radio>
      </RHFRadioGroup>

      <RHFInput control={control} name="dbServer" label="آدرس سرور دیتابیس" required />
      <RHFInput control={control} name="dbPort" label="پورت" required />
      <RHFInput control={control} name="dbUsername" label="نام کاربری" required />
      <RHFPassword control={control} name="dbPassword" label="رمز عبور" required />

      <div className="app-form-item--full">
        <Button loading={loading} icon={<SecurityScanFilled />} type="primary" onClick={handleGetDatabases}>
          اتصال به دیتابیس
        </Button>
      </div>

      <RHFSelect
        control={control}
        name="dbName"
        label="نام دیتابیس"
        required
        allowClear
        showSearch
        placeholder="دیتابیس را انتخاب نمایید..."
        options={databaseList.map((d) => ({ value: Object.values(d)[0], label: Object.values(d)[0] }))}
      />
    </SectionCard>
  );
};

export default InitDb;
