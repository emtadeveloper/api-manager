"use client";
import { Controller, Control, FieldValues } from "react-hook-form";
import { Select } from "antd";
import type { SelectProps } from "antd";
import { RHFFieldWrapper } from "./RHFField";

interface RHFSelectProps extends Omit<
  SelectProps,
  "name" | "value" | "onChange"
> {
  control: Control<FieldValues>;
  name: string;
  label?: string;
  required?: boolean;
  full?: boolean;
}

export default function RHFSelect({
  control,
  name,
  label,
  required,
  full,
  ...props
}: RHFSelectProps) {
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
          <Select
            {...props}
            value={field.value ?? null}
            onChange={(val) => field.onChange(val)}
            onBlur={field.onBlur}
            status={fieldState.error ? "error" : undefined}
            className="w-full"
          />
        </RHFFieldWrapper>
      )}
    />
  );
}
