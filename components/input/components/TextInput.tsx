import React from "react";
import { Input } from "antd";
import type { InputProps } from "antd";
import clsx from "clsx";

interface TextInputProps extends Omit<InputProps, "onChange" | "value" | "status"> {
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
    <div className="flex flex-col gap-1 w-full font-sans">
      {(label || error) && (
        <div className="flex justify-between items-center mb-1">
          {label && (
            <label htmlFor="text-input" className="text-xs font-normal text-gray-800 flex items-center gap-1">
              {label}
              {required && <span className="text-red-500 font-bold">*</span>}
            </label>
          )}
          {error && <p className="text-red-500 text-xs font-medium truncate max-w-[50%]">{error}</p>}
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
        className={clsx("w-full", className)}
        {...props}
      />
    </div>
  );
};

export default React.memo(TextInput);
