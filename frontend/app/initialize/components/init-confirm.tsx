"use client";
import { DatabaseType } from "@/enums/database-type.enum";
import SectionCard from "@/components/ui/SectionCard";
import RHFInput from "@/components/form/RHFInput";
import RHFPassword from "@/components/form/RHFPassword";
import RHFRadioGroup from "@/components/form/RHFRadioGroup";
import RHFSelect from "@/components/form/RHFSelect";
import { Radio } from "antd";
import { useFormContext } from "react-hook-form";

const InitConfirm = () => {
  const { control } = useFormContext();

  return (
    <>
      <SectionCard title="اطلاعات کاربر سیستم">
        <RHFInput control={control} name="firstName" label="نام" required />
        <RHFInput control={control} name="lastName" label="نام خانوادگی" required />
        <RHFInput control={control} name="username" label="نام کاربری" required dir="ltr" />
        <RHFPassword control={control} name="password" label="رمز عبور" required />
        <RHFPassword control={control} name="password2" label="تکرار رمز عبور" required />
      </SectionCard>

      <SectionCard title="اطلاعات پایگاه داده">
        <RHFRadioGroup control={control} name="dbType" label="نوع دیتابیس">
          <Radio value={DatabaseType.SQL}>SQL</Radio>
          <Radio value={DatabaseType.ORACLE}>ORACLE</Radio>
          <Radio value={DatabaseType.POSTGRES}>POSTGRES</Radio>
        </RHFRadioGroup>
        <RHFInput control={control} name="dbServer" label="آدرس سرور دیتابیس" required />
        <RHFInput control={control} name="dbPort" label="پورت" required />
        <RHFInput control={control} name="dbUsername" label="نام کاربری" required />
        <RHFPassword control={control} name="dbPassword" label="رمز عبور" required />
        <RHFSelect
          control={control}
          name="dbName"
          label="نام دیتابیس"
          allowClear
          showSearch
          placeholder="دیتابیس را انتخاب نمایید..."
          options={[
            { value: "db1", label: "db1" },
            { value: "db2", label: "db2" },
            { value: "db3", label: "db3" },
          ]}
        />
      </SectionCard>
    </>
  );
};

export default InitConfirm;
