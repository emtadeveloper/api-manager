import React from "react";
import { Input } from "antd";
import clsx from "clsx";

interface AmountInputProps {
  label?: string;
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
  const formattedValue = value
    ? new Intl.NumberFormat("en-US").format(Number(value))
    : "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue = e.target.value.replace(/[^\d]/g, "");
    onChange(Number(numericValue) || 0);
  };

  return (
    <div className="flex flex-col gap-1.5 w-full font-sans">
      <div className="flex flex-row justify-between items-center">
        <label
          htmlFor="amount"
          className="text-xs font-medium app-text-primary flex items-center gap-1"
        >
          {label}
          {required && <span className="text-danger font-bold">*</span>}
        </label>
        {error && <p className="text-danger text-xs font-medium">{error}</p>}
      </div>

      <Input
        id="amount"
        value={formattedValue}
        onChange={handleChange}
        type="tel"
        dir="ltr"
        placeholder={placeholder}
        disabled={disabled}
        status={error ? "error" : undefined}
        className={clsx(
          "w-full rounded-lg border-[var(--app-border)] bg-[var(--app-surface-light)] text-[var(--app-text-primary)]",
          "py-2.5 px-4 text-sm transition-all duration-200",
          "hover:border-[var(--app-primary)] focus:border-[var(--app-primary-light)]",
          className,
        )}
      />
    </div>
  );
};

export default AmountInput;
