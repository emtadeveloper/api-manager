"use client";

import React, { useState } from "react";
import { Input } from "antd";

interface PhoneNumberInputProps {
  setPhoneNumber?: (value: string) => void;
  className?: string;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({ setPhoneNumber = () => {}, className = "" }) => {
  const [inputValue, setInputValue] = useState("");

  const replacePlusWithZero = (inputString: string) => {
    if (typeof inputString !== "string") return "";
    let updatedString = inputString.replace(/\+/g, "0");
    updatedString = updatedString.replace(/^00/, "0");
    return updatedString;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = replacePlusWithZero(e.target.value);
    setInputValue(value);
    setPhoneNumber(value);
  };

  return (
    <div className="flex flex-col gap-1.5 w-full font-sans">
      <label htmlFor="phone-number" className="text-xs font-medium app-text-primary">
        شماره موبایل
      </label>
      <Input
        id="phone-number"
        type="text"
        dir="ltr"
        placeholder="شماره موبایل را وارد نمایید"
        value={inputValue}
        onChange={handleInputChange}
        className={className}
      />
    </div>
  );
};

export default PhoneNumberInput;
