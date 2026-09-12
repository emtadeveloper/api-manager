"use client";

import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
} from "react-hook-form";
import { Input } from "antd";
import type { InputProps } from "antd";

import { RHFFieldWrapper } from "./RHFField";

interface RHFInputProps<T extends FieldValues> extends Omit<
  InputProps,
  "name" | "defaultValue" | "value" | "onChange"
> {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  required?: boolean;
  full?: boolean;
}

export default function RHFInput<T extends FieldValues>({
  control,
  name,
  label,
  required,
  full,
  ...props
}: RHFInputProps<T>) {
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
          <Input
            {...props}
            {...field}
            value={(field.value as string) ?? ""}
            status={fieldState.error ? "error" : undefined}
          />
        </RHFFieldWrapper>
      )}
    />
  );
}
