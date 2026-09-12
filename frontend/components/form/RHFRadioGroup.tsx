"use client";
import { Controller, Control, FieldValues } from "react-hook-form";
import { Radio } from "antd";
import { RHFFieldWrapper } from "./RHFField";
import { ReactNode } from "react";

interface RHFRadioGroupProps {
  control: Control<FieldValues>;
  name: string;
  label?: string;
  required?: boolean;
  full?: boolean;
  children: ReactNode;
}

export default function RHFRadioGroup({
  control,
  name,
  label,
  required,
  full,
  children,
}: RHFRadioGroupProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <RHFFieldWrapper
          label={label}
          required={required}
          error={fieldState.error?.message}
          full={full}
        >
          <Radio.Group
            onChange={field.onChange}
            value={field.value}
            name={field.name}
          >
            {children}
          </Radio.Group>
        </RHFFieldWrapper>
      )}
    />
  );
}
