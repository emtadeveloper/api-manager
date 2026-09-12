import React from "react";
import { Checkbox } from "antd";

interface MultipleOptionInputProps {
  value?: string[];
  onChange?: (values: string[]) => void;
  className?: string;
  options?: string[];
}

const MultipleOptionInput: React.FC<MultipleOptionInputProps> = ({
  value = [],
  onChange = () => {},
  className = "",
  options = ["Option 1", "Option 2", "Option 3"],
}) => {
  return (
    <div className={className || "flex flex-col space-y-2"}>
      <Checkbox.Group
        value={value}
        onChange={onChange}
        options={options}
        className="flex flex-col space-y-2"
      />
    </div>
  );
};

export default MultipleOptionInput;
