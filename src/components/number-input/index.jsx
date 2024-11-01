const NumberInput = ({ label, name, placeholder = "", onBlur, value }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>{label}</label>
      <input
        type="number"
        name={name}
        id={name}
        placeholder={placeholder}
        onBlur={onBlur}
        value={value}
        className="border rounded-lg py-1 px-2 text-sm focus-within:outline-0 focus-within:border-primary [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />
    </div>
  );
};

export default NumberInput;
