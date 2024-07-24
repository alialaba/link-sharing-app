import React from "react";
import { FaEnvelope, FaLock } from 'react-icons/fa'; // FontAwesome icons


interface InputFieldProps {
  label: string;
  errMsg: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: boolean;
}

const InputField = ({
  label,
  errMsg,
  type,
  placeholder,
  value,
  onChange,
  required = false,
  error = false
}: InputFieldProps) => {
  return (
  

    <div className="flex flex-col mb-6">
      <label className={`block text-xs ${error ? 'border-[#FF3939]' : `text-[#333333]`}  mb-2`}>{label}</label>
      <div className={`input-wrapper flex align-center border rounded-lg border-solid px-[16px] py-[12px] ${
          error ? 'border-[#FF3939]' : 'border-[#D9D9D9]'
        } relative transition-colors duration-300 ease-in-out focus-within:border-[#633CFF] focus-within:shadow-custom-shadow focus-within:caret-[#633CFF]`}>
      
      {type == "email" && <FaEnvelope  style={{color: "#333"}} className="ml-2 mt-1 input-icon"/>}
      {type == "password" && <FaLock  style={{color: "#333"}} className="ml-2 mt-1 input-icon"/>}
      <input
      className="flex-1 border-none outline-none bg-transparent px-[12px] text-black text-[16px] "
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        aria-describedby={error ? "error-message" : "undefined"}
      />
      {error && <small className="absolute right-[8px] mr-2 mt-1  text-[12px] text-[#FF3939]">{errMsg}</small>}
      </div>
    </div>
  );
};

export default InputField;
