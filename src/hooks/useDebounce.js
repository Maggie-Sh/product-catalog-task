import { useState, useEffect } from "react";

export const useDebounce = (value, ms = 200) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, ms);
    return () => clearTimeout(handler);
  }, [value, ms]);

  return debounceValue;
};
