import { cn } from "../../utils/cn";

const Pagination = ({ totalPages = 1, handleChange, currentPage }) => {
  return (
    <div className="flex items-center justify-end gap-2 mt-2">
      {Array.from({ length: totalPages }).map((_, i) => (
        <button
          key={i}
          onClick={() => handleChange(i + 1)}
          disabled={totalPages <= 1}
          className={cn(
            "border rounded-lg w-8 h-8",
            currentPage === i + 1 && "bg-primary text-white"
          )}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
