import React from "react";
import { Input } from "antd";

interface AmountInputProps {
  label?: string;
  type?: string;
  required?: boolean;
  error?: string;
  value?: number | string;
  onChange?: (value: number) => void;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
}

const AmountInput: React.FC<AmountInputProps> = ({
  label = "",
  required = false,
  error = "",
  value,
  onChange = () => {},
  className = "",
  placeholder = "",
  disabled = false,
}) => {
  const formattedValue = value ? new Intl.NumberFormat("en-US").format(Number(value)) : "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue = e.target.value.replace(/[^\d]/g, "");
    onChange(Number(numericValue) || 0);
  };

  return (
    <div className={`text-right ${className} flex flex-col gap-y-2`}>
      <div className="flex flex-row justify-between">
        <label htmlFor="amount" className="text-base font-semibold flex flex-row gap-1">
          <span>{label}</span>
          {required && <span className="text-red-600">*</span>}
        </label>
        <p className="text-red-600 text-xs">{error}</p>
      </div>
      <Input
        id="amount"
        value={formattedValue}
        onChange={handleChange}
        type="tel"
        placeholder={placeholder}
        disabled={disabled}
        status={error ? "error" : undefined}
        className="w-full bg-gray-50 text-gray-900 rounded-md border-2 active:border-gray-300 hover:border-gray-300"
      />
    </div>
  );
};

export default AmountInput;
