// components/input/components/TextInput.tsx
import React from "react";
import { Input } from "antd";
import type { InputProps } from "antd";
import clsx from "clsx";

interface TextInputProps extends Omit<
  InputProps,
  "onChange" | "value" | "status"
> {
  label?: string;
  required?: boolean;
  error?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  label = "",
  type = "text",
  required,
  error,
  value = "",
  onChange = () => {},
  className = "",
  disabled = false,
  placeholder = "",
  ...props
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="flex flex-col gap-1.5 w-full font-sans">
      {(label || error) && (
        <div className="flex justify-between items-center">
          {label && (
            <label
              htmlFor="text-input"
              className="text-xs font-medium text-[var(--app-text-primary)] flex items-center gap-1"
            >
              {label}
              {required && <span className="text-red-500 font-bold">*</span>}
            </label>
          )}
          {error && (
            <p className="text-red-500 text-xs font-medium truncate max-w-[50%]">
              {error}
            </p>
          )}
        </div>
      )}

      <Input
        id="text-input"
        type={type}
        value={value ?? ""}
        onChange={handleChange}
        disabled={disabled}
        placeholder={placeholder}
        status={error ? "error" : undefined}
        className={clsx(
          "w-full rounded-lg border-[var(--app-border)] bg-[var(--app-surface-light)] text-[var(--app-text-primary)]",
          "py-2.5 px-4 text-sm transition-all duration-200",
          "hover:border-[var(--app-primary)] focus:border-[var(--app-primary-light)]",
          "focus:shadow-[0_0_0_3px_rgba(245,158,11,0.15)]",
          className,
        )}
        {...props}
      />
    </div>
  );
};

export default React.memo(TextInput);
