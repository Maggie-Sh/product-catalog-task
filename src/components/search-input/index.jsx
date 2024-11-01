import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import { cn } from "../../utils/cn";

const SearchInput = ({ value, onChange, placeholder, className = "" }) => {
  return (
    <form role="search" className={cn("relative w-full", className)}>
      <SearchIcon className="absolute top-1/2 left-3 -translate-y-1/2" />
      <input
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="p-3 pl-9 w-full border rounded-full focus-visible:outline-0 focus-visible:border-primary"
      />
    </form>
  );
};

export default SearchInput;
