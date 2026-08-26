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
    <div>
      <label htmlFor="phone-number" className="block text-sm font-normal text-right leading-6 text-gray-700">
        شماره موبایل
      </label>
      <div className={`flex flex-row mt-2 rounded-md ${className || ""}`}>
        <Input
          id="phone-number"
          type="text"
          placeholder="شماره موبایل را وارد نمایید"
          value={inputValue}
          onChange={handleInputChange}
          className="w-full text-right text-lg py-2 leading-tight"
        />
      </div>
    </div>
  );
};

export default PhoneNumberInput;
