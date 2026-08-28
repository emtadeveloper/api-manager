import React from "react";
import { Input } from "antd";
import type { InputProps } from "antd";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import clsx from "clsx";

interface PasswordInputProps extends Omit<InputProps, "onChange" | "value" | "status"> {
  label?: string;
  required?: boolean;
  error?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  label = "",
  required,
  error,
  value = "",
  onChange = () => {},
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
              htmlFor="password-input"
              className="text-xs font-medium text-[var(--app-text-primary)] flex items-center gap-1"
            >
              {label}
              {required && <span className="text-red-500 font-bold">*</span>}
            </label>
          )}
          {error && <p className="text-red-500 text-xs font-medium truncate max-w-[50%]">{error}</p>}
        </div>
      )}

      <Input.Password
        id="password-input"
        value={value ?? ""}
        onChange={handleChange}
        disabled={disabled}
        placeholder={placeholder}
        status={error ? "error" : undefined}
        iconRender={(visible) =>
          visible ? <EyeOutlined style={{ color: "#ffffff" }} /> : <EyeInvisibleOutlined style={{ color: "#ffffff" }} />
        }
        {...props}
      />
    </div>
  );
};

export default React.memo(PasswordInput);
