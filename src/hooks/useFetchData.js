import { useMemo, useState, useEffect } from "react";
import { products } from "../data/data";

export const useFetchData = ({
  filters = {},
  query = "",
  page = 1,
  sortBy = "",
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [pageProducts, setPageProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  const contains = (str, substr) =>
    str.toLowerCase().includes(substr.toLowerCase());

  const isProductMatches = (product) => {
    const {
      categories = [],
      brands = [],
      min,
      max,
      rating = 0,
    } = filters || {};
    const { category, brand, name } = product;

    const meetsCategory =
      !categories.length || categories.includes(product.category);
    const meetsBrand = !brands.length || brands.includes(product.brand);
    const meetsPrice =
      (!min || product.price >= +min) && (!max || product.price <= +max);
    const meetsRating = product.rating >= rating;
    const meetsQuery =
      contains(category, query) ||
      contains(brand, query) ||
      contains(name, query);
    return (
      meetsCategory && meetsBrand && meetsPrice && meetsRating && meetsQuery
    );
  };

  const filteredProducts = useMemo(() => {
    if (!filters && !query) return products;
    return products.filter(isProductMatches);
  }, [filters, query]);

  const sortedProducts = useMemo(() => {
    if (!sortBy) return filteredProducts;

    const sorted = [...filteredProducts].sort((a, b) => {
      switch (sortBy) {
        case "rate asc":
          return a.rating - b.rating;
        case "rate desc":
          return b.rating - a.rating;
        case "price asc":
          return a.price - b.price;
        case "price desc":
          return b.price - a.price;
        default:
          return 0;
      }
    });

    return sorted;
  }, [filteredProducts, sortBy]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        // Simulate network request delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Calculate pagination
        const startIndex = (page - 1) * 10;
        const endIndex = startIndex + 10;
        const total = Math.ceil(sortedProducts.length / 10) || 1;
        setTotalPages(total);

        // Check for valid page
        if (page > total) {
          setPageProducts([]);
          setIsError(true);
        } else {
          setPageProducts(sortedProducts.slice(startIndex, endIndex));
          setIsError(false);
        }
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [page, sortedProducts]);

  return {
    isLoading,
    isError,
    products: pageProducts,
    page,
    totalPages,
  };
};
