import React from "react";
import {
  useAllProducts,
  useProductByCategory,
} from "../../hooks/useProductsHook";
import ProductCard from "../components/ProductCard";
import FilterProducts from "../components/FilterProducts";

const Shop = () => {
  let { data, error, isPending, search, setSearch } = useAllProducts();

  let {
    data: categoryData,
    prodCategory,
    setProdCategory,
  } = useProductByCategory();

  return (
    <div>
      <FilterProducts
        prodCategory={prodCategory}
        setProdCategory={setProdCategory}
        search={search}
        setSearch={setSearch}
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 py-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {prodCategory?.products?.length
          ? prodCategory?.products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          : data?.products?.map((product) => (
              <ProductCard key={product.id} product={product} />  
            ))}
      </div>
    </div>
  );
};

export default Shop;
