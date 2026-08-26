import React from "react";
import { Checkbox } from "antd";

interface InputCheckboxProps {
  title?: string;
  value?: unknown;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  onBlur?: () => void;
  label?: string;
}

const InputCheckbox: React.FC<InputCheckboxProps> = ({ title, checked, onChange, onBlur, label }) => {
  return (
    <div className="flex items-center sm:justify-between">
      <Checkbox
        name={title}
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        onBlur={onBlur}
        className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
      >
        <span className="mr-2 font-normal text-gray-700">{label}</span>
      </Checkbox>
    </div>
  );
};

export default InputCheckbox;
