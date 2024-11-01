const CustomSelect = ({ name, options, label, onChange, value = "" }) => {
  return (
    <div className="px-4">
      <label htmlFor={name} className="text-sm">
        {label}
      </label>
      <select
        name={name}
        id={name}
        onChange={onChange}
        value={value}
        className="block w-full border rounded-xl p-2 focus-visible:border-primary focus-visible:outline-0 capitalize"
      >
        {options.map((opt) => (
          <option
            key={opt}
            value={opt}
            className="hover:shadow-none checked:bg-primary checked:text-white capitalize"
          >
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
