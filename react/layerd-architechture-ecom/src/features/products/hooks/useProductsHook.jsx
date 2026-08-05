import { useQuery } from "@tanstack/react-query";
import {
  getAllProducts,
  getAllProductsCategories,
} from "../api/allProductsApi";
import { useEffect, useState } from "react";

export const useAllProducts = () => {
  const [search, setSearch] = useState(null);
  const [debounsing, setDebounsing] = useState(null);
  console.log("from search data", search);

  useEffect(() => {
    let timeOut = setTimeout(() => {
      setDebounsing(search);
    }, 700);

    return () => clearTimeout(timeOut);
  }, [search]);

  const { data, error, isPending } = useQuery({
    queryKey: ["products", debounsing],
    queryFn: () => getAllProducts(debounsing),
  });

  console.log("products data", data);

  return {
    data,
    error,
    isPending,
    search,
    setSearch,
  };
};

export const useAllCategories = () => {
  return useQuery({
    queryKey: ["AllCategory"],
    queryFn: getAllProductsCategories,
  });
};
