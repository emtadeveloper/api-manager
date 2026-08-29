import React, { useCallback } from "react";
import { Select } from "antd";
import type { SelectProps } from "antd";
import { filterBySearchLabel } from "@/utils/antd-select-filter";

interface SelectBoxProps {
  label?: string;
  value?: string | null;
  options?: string[];
  search?: string;
  onSearchChange?: (val: string) => void;
  onSelect?: (val: string | null) => void;
  required?: boolean;
  error?: string;
  className?: string;
  placeholder?: string;
  isOpen?: boolean;
  onToggle?: () => void;
}

const SelectBox: React.FC<SelectBoxProps> = ({
  label = "",
  value,
  options = [],
  search = "",
  onSearchChange,
  onSelect,
  required = false,
  error = "",
  className = "",
  placeholder = "",
  isOpen = false,
  onToggle,
}) => {
  const antOptions: SelectProps["options"] = options.map((opt) => ({
    label: opt,
    value: opt,
  }));

  const allOptions = [{ label: `همه ${label}‌ها`, value: null }, ...antOptions];

  const handleChange = useCallback(
    (val: string | null) => {
      onSelect?.(val);
    },
    [onSelect],
  );

  const handleDropdownVisibleChange = useCallback(
    (open: boolean) => {
      if (open && !isOpen) {
        onToggle?.();
      } else if (!open && isOpen) {
        onToggle?.();
      }
    },
    [isOpen, onToggle],
  );

  return (
    <div className={`flex flex-col gap-1 w-full ${className}`}>
      {(label || error) && (
        <div className="flex justify-between items-center mb-1">
          {label && (
            <label className="text-xs font-normal text-gray-800 flex items-center gap-1">
              {label}
              {required && <span className="text-red-500 font-bold">*</span>}
            </label>
          )}
          {error && <p className="text-red-500 text-xs font-medium truncate max-w-[50%]">{error}</p>}
        </div>
      )}

      <Select
        placeholder={placeholder || `همه ${label}‌ها`}
        value={value ?? null}
        onChange={handleChange}
        options={allOptions}
        showSearch
        allowClear
        filterOption={filterBySearchLabel}
        onSearch={onSearchChange}
        status={error ? "error" : undefined}
        className="w-full"
        open={isOpen}
        onDropdownVisibleChange={handleDropdownVisibleChange}
        searchValue={search}
        getPopupContainer={(trigger) => trigger.parentElement || document.body}
      />
    </div>
  );
};

export default React.memo(SelectBox);
