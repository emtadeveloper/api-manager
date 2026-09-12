"use client";

import React from "react";
import { Select } from "antd";
import type { SelectProps } from "antd";

interface MultiSelectFilterTableProps {
  label?: string;
  options?: string[];
  selectedValues?: string[];
  onChange?: (values: string[]) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  className?: string;
}

const MultiSelectFilterTable: React.FC<MultiSelectFilterTableProps> = ({
  label = "",
  options = [],
  selectedValues = [],
  onChange = () => {},
  placeholder: _placeholder = "جستجو...",
  required = false,
  error = "",
  className = "",
}) => {
  const antOptions: SelectProps["options"] = options.map((opt) => ({
    label: opt || "بدون عنوان",
    value: opt,
  }));

  const showError = required && selectedValues.length === 0;

  return (
    <div className={`relative w-full ${className}`}>
      <div className="mb-1">
        {(label || showError || error) && (
          <div className="flex justify-between items-center mb-1">
            {label && (
              <label className="text-xs font-normal app-text-primary flex items-center gap-1">
                {label}
                {required && <span className="text-danger font-bold">*</span>}
              </label>
            )}
            {(showError || error) && (
              <p className="text-danger text-xs font-medium truncate max-w-[50%]">
                {error || `لطفاً حداقل یک ${label} انتخاب کنید.`}
              </p>
            )}
          </div>
        )}

        <Select
          mode="multiple"
          placeholder={`انتخاب ${label}`}
          value={selectedValues}
          onChange={onChange}
          options={antOptions}
          showSearch
          allowClear
          filterOption={(input, option) =>
            (option?.label ?? "")
              .toString()
              .toLowerCase()
              .includes(input.toLowerCase())
          }
          status={showError || error ? "error" : undefined}
          className="w-full"
          maxTagCount="responsive"
          getPopupContainer={(trigger) =>
            trigger.parentElement || document.body
          }
        />
      </div>
    </div>
  );
};

export default MultiSelectFilterTable;
