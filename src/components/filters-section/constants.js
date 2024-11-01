import { CATEGORIES, BRANDS } from "../../data/data";

export const checkboxFields = [
  {
    name: "category[]",
    items: CATEGORIES,
    fieldName: "categories",
    title: "Category",
  },
  {
    name: "brand[]",
    items: BRANDS,
    fieldName: "brands",
    title: "Brand",
  },
];

export const priceRangeFields = [
  { name: "min", label: "From" },
  { name: "max", label: "To" },
];

export const sortOptions = ["price asc", "price desc", "rate asc", "rate desc"];
