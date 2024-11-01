import React from "react";

const CustomRadio = ({ name, value, prefix = "", onChange, checked }) => {
  return (
    <label
      htmlFor={value}
      className="border rounded-full py-1 px-2 w-max has-[:focus-within]:border-primary has-[:checked]:border-primary has-[:checked]:bg-primary has-[:checked]:text-white text-sm min-w-10 text-center"
    >
      <input
        type="radio"
        id={value}
        name={name}
        value={value}
        className="w-0 h-0"
        onChange={onChange}
        checked={checked}
      />
      {`${prefix}${value}`}
    </label>
  );
};

export default CustomRadio;
