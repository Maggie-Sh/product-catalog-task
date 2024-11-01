const CustomCheckbox = ({
  name,
  value,
  prefix = "",
  onChange,
  fieldName = "",
  checked = false,
}) => {
  return (
    <label
      htmlFor={value}
      className="border rounded-full py-1 px-2 w-max has-[:focus-within]:border-primary has-[:checked]:border-primary has-[:checked]:bg-primary has-[:checked]:text-white text-sm cursor-pointer"
    >
      <input
        type="checkbox"
        id={value}
        name={name}
        value={value}
        className="w-0 h-0"
        onChange={(e) => onChange(e, fieldName)}
        checked={checked}
      />
      {`${prefix}${value}`}
    </label>
  );
};

export default CustomCheckbox;
