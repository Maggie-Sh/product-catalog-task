import { RATINGS } from "../../data/data";
import { checkboxFields, priceRangeFields, sortOptions } from "./constants";

import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters, setSortBy } from "../../redux/slices/filtersSlice";

import Accordion from "../accordion";
import CustomCheckbox from "../custom-checkbox";
import FieldWrapper from "../field-wrapper";
import CustomRadio from "../custom-radio";
import NumberInput from "../number-input";
import CustomSelect from "../custom-select";

const FiltersSection = () => {
  const dispatch = useDispatch();
  const { filters, sortBy } = useSelector((state) => state.filters);
  const formRef = useRef();

  const updateFilters = (filterOption) => {
    window.scroll(0, 0);
    dispatch(setFilters({ ...filters, ...filterOption }));
  };

  const handleCheckboxChange = (e, fieldName) => {
    const { name } = e.target;
    const currentFilters = new FormData(e.target.form);
    let updatedFilter = Array.from(currentFilters.getAll(name));
    updateFilters({ [fieldName]: updatedFilter });
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    updateFilters({ [name]: value });
  };

  const handlePriceRangeChange = (e) => {
    const { name, value } = e.target;
    const currentFilters = new FormData(e.target.form);
    const min = currentFilters.get("min");
    const max = currentFilters.get("max");
    if ((name === "min" && +value >= max) || (name === "max" && +value <= min))
      return; // return if range is not valid
    updateFilters({ [name]: value });
  };

  const handleSort = (e) => {
    const { value } = e.target;
    dispatch(setSortBy(value));
  };

  const handleReset = () => {
    if (formRef.current) {
      formRef.current.reset();
      dispatch(setFilters({}));
      dispatch(setSortBy(""));
    }
  };

  const contentCheckboxesClassName = "flex items-center gap-2 flex-wrap";

  return (
    <Accordion title="Filters">
      <form ref={formRef} className="flex flex-col gap-4 overflow-y-auto py-2">
        <CustomSelect
          options={sortOptions}
          name="sortBy"
          label="Sort by"
          onChange={handleSort}
          value={sortBy || ""}
        />
        {checkboxFields.map(({ name, title, fieldName, items }) => (
          <FieldWrapper
            key={title}
            title={title}
            contentClassName={contentCheckboxesClassName}
          >
            {items.map((item) => (
              <CustomCheckbox
                key={item}
                name={name}
                value={item}
                fieldName={fieldName}
                onChange={handleCheckboxChange}
                checked={filters[fieldName]?.includes(item)}
              />
            ))}
          </FieldWrapper>
        ))}
        <FieldWrapper
          title="Rating"
          contentClassName="flex gap-1 sm:justify-between"
        >
          {RATINGS.map((rating) => (
            <CustomRadio
              key={rating}
              name="rating"
              value={rating}
              prefix=">"
              onChange={handleRadioChange}
              checked={+filters?.rating === rating}
            />
          ))}
        </FieldWrapper>
        <FieldWrapper title="Price" contentClassName="grid grid-cols-2 gap-2">
          {priceRangeFields.map(({ name, label }) => (
            <NumberInput
              key={name}
              name={name}
              label={label}
              placeholder={label}
              onBlur={handlePriceRangeChange}
              value={filters[name]}
            />
          ))}
        </FieldWrapper>
        <button
          type="button"
          onClick={handleReset}
          className="ml-auto mr-4 py-1 px-4 border rounded-xl hover:border-primary"
        >
          Reset
        </button>
      </form>
    </Accordion>
  );
};

export default FiltersSection;
