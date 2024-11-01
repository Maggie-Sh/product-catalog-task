import React from "react";

const FieldWrapper = ({ title, contentClassName = "", children }) => {
  return (
    <div className="flex flex-col gap-2 border-t px-4 pt-2">
      <span className="text-md font-medium">{title}</span>
      <div className={contentClassName}>{children}</div>
    </div>
  );
};

export default FieldWrapper;
