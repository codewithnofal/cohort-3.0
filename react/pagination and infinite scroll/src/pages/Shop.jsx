import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getProductsData } from "../api/productApi";

const Shop = () => {
  const [pages, setPages] = useState(0);
  console.log(pages);

  let limit = 10;

  const { data, isPending, isError, isPlaceholderData } = useQuery({
    queryKey: ["products", pages],
    queryFn: () => getProductsData(limit, pages),
    placeholderData: keepPreviousData,
  });

  console.log(data);

  const totalPages = Math.ceil(data?.total / limit);
  console.log(totalPages);

  return (
    <div>
      <div
        style={{ opacity: isPlaceholderData ? 0.3 : 1 }}
        className="grid  sm:grid-cols-4 gap-2 p-2"
      >
        {data?.products?.map((p) => {
          return <ProductCard key={p.id} product={p} />;
        })}
      </div>
      <div className="flex items-center justify-center p-5 gap-5">
        <button
          disabled={pages === 0}
          onClick={() => setPages(pages - 1)}
          className="p-2 bg-blue-400 text-white rounded-lg cursor-pointer"
        >
          Prev
        </button>
        <span>
          Page {pages + 1} of {totalPages}
        </span>
        <button
          disabled={pages === totalPages - 1}
          onClick={() => setPages(pages + 1)}
          className="p-2 bg-blue-400 text-white rounded-lg cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Shop;
