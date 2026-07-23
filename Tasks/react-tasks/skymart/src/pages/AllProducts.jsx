import { Search, ChevronDown, ShoppingCart, Star } from "lucide-react";
import { useContext, useEffect } from "react";
import { ProdStore } from "../context/productContext";
import axios from "axios";
import { Navigate, useNavigate } from "react-router";
import { motion } from "framer-motion";

function AllProducts() {
  let navigate = useNavigate();
  let { products, setProducts, cartItems, setCartItems } =
    useContext(ProdStore);
  const getProductsData = async () => {
    try {
      const res = await axios.get(
        "https://dummyjson.com/products?offset=0&limit=80",
      );
      console.log(res.data.products);
      setProducts(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };


  const addToCart = () => {
    
  }

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <section className="bg-black text-white px-6 lg:px-12 py-10 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
          All Products
        </h1>
        <p className="mt-2 text-sm  text-neutral-500">
          {products.length} products found
        </p>
      </div>
      {/* Search + Filters bar */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-3 flex flex-col md:flex-row items-stretch md:items-center gap-3 mb-8">
        <div className="flex items-center gap-3 flex-1 rounded-xl bg-black/40 border border-white/5 px-4 py-3">
          <Search className="h-4 w-4 text-neutral-500" />
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none w-full text-sm placeholder:text-neutral-500"
          />
        </div>
        <div className="relative">
          <select className="appearance-none rounded-xl bg-black/40 border border-white/10 pl-4 pr-10 py-3 text-sm outline-none cursor-pointer hover:border-white/20">
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Clothing</option>
            <option>Home</option>
            <option>Furniture</option>
          </select>
          <ChevronDown className="h-4 w-4 text-neutral-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
        <div className="relative">
          <select className="appearance-none rounded-xl bg-black/40 border border-[#c6f24e]/50 pl-4 pr-10 py-3 text-sm outline-none cursor-pointer text-[#c6f24e]">
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Top Rated</option>
          </select>
          <ChevronDown className="h-4 w-4 text-[#c6f24e] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {products.map((p) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            key={p.id}
            className="group  rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-[#c6f24e]/40 transition"
          >
            <div
              onClick={() => navigate(`/product/${p.id}`)}
              className="relative bg-white p-3"
            >
              <span className="absolute top-3 left-3 z-10 rounded-md bg-black/80 text-white text-[10px] font-semibold px-2 py-1">
                {p.category}
              </span>
              <div className="aspect-[4/3] w-full rounded-lg overflow-hidden bg-neutral-100 flex items-center justify-center">
                <img
                  src={p.images[0]}
                  alt={p.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition"
                />
              </div>
            </div>
            <div className="p-4">
              <p className="text-xs text-neutral-500">{p.brand}</p>
              <h3 className="mt-1 text-sm font-semibold leading-snug min-h-[2.5rem]">
                {p.title}
              </h3>
              <div className="mt-2 flex items-center gap-1.5">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3.5 w-3.5 ${
                        i < p.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-neutral-700"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-neutral-500">
                  ({p.reviews[0].rating})
                </span>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xl font-bold text-[#c6f24e]">
                  ${p.price.toFixed(2)}
                </span>
                <button
                  onClick={() => addToCart()}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#c6f24e] text-black px-3.5 py-1.5 text-xs font-bold hover:brightness-110"
                >
                  <ShoppingCart className="h-3.5 w-3.5" /> Add
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
export default AllProducts;
