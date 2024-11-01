import { useState, useEffect } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { useFetchData } from "../../hooks/useFetchData";
import { useSelector, useDispatch } from "react-redux";
import { setPage } from "../../redux/slices/filtersSlice";

import SearchInput from "../search-input";
import InfoBox from "../info-box";
import ProductCard from "../product-card";
import Pagination from "../pagination";

const ProductsSection = () => {
  const dispatch = useDispatch();
  const { page, filters, sortBy } = useSelector((state) => state.filters);
  const [searchVal, setSearchVal] = useState("");
  const query = useDebounce(searchVal);

  const {
    products = [],
    totalPages,
    isError,
    isLoading,
  } = useFetchData({
    filters,
    query,
    page,
    sortBy,
  });

  const handleSearchChange = (e) => setSearchVal(e.target.value);

  const handlePageChange = (page) => {
    window.scroll(0, 0);
    dispatch(setPage(page));
  };

  useEffect(() => {
    //save selected filters to local storage
    const handleBeforeUnload = (event) => {
      localStorage.setItem("filters", JSON.stringify({ filters, sortBy }));
      const message = "";
      event.returnValue = message;
      return message;
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [filters, sortBy]);

  return (
    <section className="flex-1 overflow-y-auto w-full h-full sm:pr-4">
      <h1 className="text-3xl mb-6">Products</h1>
      <SearchInput
        placeholder="Search for product"
        value={searchVal}
        onChange={handleSearchChange}
        className="mb-4"
      />
      <section className="grid grid-cols-products-grid gap-4">
        {isError ? (
          <InfoBox status="error" />
        ) : isLoading ? (
          <InfoBox message="Loading..." />
        ) : !products.length ? (
          <InfoBox message="No products found..." />
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </section>
      {!isLoading && !isError && !!products.length && (
        <Pagination
          totalPages={totalPages}
          handleChange={handlePageChange}
          currentPage={page}
        />
      )}
    </section>
  );
};

export default ProductsSection;
