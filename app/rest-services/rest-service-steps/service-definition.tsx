"use client";
import { HttpMethod } from "@/enums/method.enum";
import { RestType } from "@/enums/rest-type.enum";
import { Radio } from "antd";
import SectionCard from "@/components/ui/SectionCard";
import RHFInput from "@/components/form/RHFInput";
import RHFRadioGroup from "@/components/form/RHFRadioGroup";
import { useFormContext } from "react-hook-form";

const SesrviceDefinition = () => {
  const { control } = useFormContext();

  return (
    <SectionCard title="تعریف وب سرویس">
      <RHFInput control={control} name="persianName" label="نام فارسی وب سرویس" required />
      <RHFInput control={control} name="latinName" label="نام لاتین وب سرویس" required dir="ltr" />

      <RHFRadioGroup control={control} name="httpMethod" label="متد فراخوانی">
        <Radio.Button value={HttpMethod.GET}>GET</Radio.Button>
        <Radio.Button value={HttpMethod.POST}>POST</Radio.Button>
      </RHFRadioGroup>

      <RHFRadioGroup control={control} name="restType" label="نوع فراخوانی" full>
        <Radio value={RestType.DATABASEDIRECT}>اتصال مستقیم به دیتابیس</Radio>
        <Radio value={RestType.EXTERNALAPI}>فراخوانی وب سرویس خارجی</Radio>
      </RHFRadioGroup>
    </SectionCard>
  );
};

export default SesrviceDefinition;
