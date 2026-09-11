"use client";
import RHFInput from "@/components/form/RHFInput";
import RHFPassword from "@/components/form/RHFPassword";
import SectionCard from "@/components/SectionCard/SectionCard";
import { useFormContext } from "react-hook-form";

const InitUser = () => {
  const { control } = useFormContext();

  return (
    <SectionCard title="اطلاعات کاربر سیستم">
      <RHFInput control={control} name="firstName" label="نام" required />
      <RHFInput control={control} name="lastName" label="نام خانوادگی" required />
      <RHFInput control={control} name="username" label="نام کاربری" required dir="ltr" />
      <RHFPassword control={control} name="password" label="رمز عبور" required />
      <RHFPassword control={control} name="password2" label="تکرار رمز عبور" required />
    </SectionCard>
  );
};

export default InitUser;
