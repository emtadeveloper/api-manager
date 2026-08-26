import React from "react";
import { Input } from "antd";
import clsx from "clsx";

const { TextArea } = Input;

interface TextFieldProps {
  label?: string;
  required?: boolean;
  error?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  rows?: number;
  type?: string;
}

const TextField: React.FC<TextFieldProps> = ({
  label = "",
  required,
  error,
  value = "",
  onChange = () => {},
  disabled = false,
  className = "",
  placeholder = "",
  rows = 4,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1 w-full font-sans">
      {(label || error) && (
        <div className="flex justify-between items-center mb-1">
          {label && (
            <label htmlFor="text-field" className="text-xs font-normal text-gray-800 flex items-center gap-1">
              {label}
              {required && <span className="text-red-500 font-bold">*</span>}
            </label>
          )}
          {error && <p className="text-red-500 text-xs font-medium truncate max-w-[50%]">{error}</p>}
        </div>
      )}

      <TextArea
        id="text-field"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        placeholder={placeholder}
        rows={rows}
        status={error ? "error" : undefined}
        className={clsx("w-full resize-y", className)}
        {...props}
      />
    </div>
  );
};

export default React.memo(TextField);
