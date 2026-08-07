import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [pages, setPages] = useState(0);
  console.log(pages);

  let limit = 10;
  const getProductsData = async () => {
    let res = await axios.get(
      `https://dummyjson.com/products?limit=${limit}&skip=${pages * limit}`,
    );
    setProducts(res.data);
  };
  console.log(products);

  const totalPages = Math.ceil(products.total / limit);
  console.log(totalPages);

  useEffect(() => {
    getProductsData();
  }, [pages]);

  return (
    <div>
      <div className="grid  sm:grid-cols-4 gap-2 p-2">
        {products?.products?.map((p) => {
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

export default Products;
