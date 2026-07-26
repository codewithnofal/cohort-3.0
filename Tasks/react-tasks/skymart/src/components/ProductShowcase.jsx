import { useEffect, useState } from "react";
import { ArrowRight, ArrowRightFromLine, ShoppingBag, Sparkles, Star } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router";

// Simple UI component: fetch products once, show them in two panels.

export function ProductShowcase() {
  const [topRated, setTopRated] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
const navigate = useNavigate()


  useEffect(() => {
    async function getProducts() {
      try {
        const res = await axios.get(
          "https://dummyjson.com/products?offset=0&limit=100",
        );
        const products = res.data.products;

        setNewArrivals(products.slice(90, 95));
        setTopRated(products.slice(95));
      } catch (error) {
        console.log(error);
      }
    }

    getProducts();
  }, []);

  return (
    <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
      <Panel
        title="Top Rated"
        icon={<Star className="h-4 w-4" />}
        products={topRated}
        featuredIndex={0}
      />
      <Panel
        title="New Arrivals"
        icon={<Sparkles className="h-4 w-4" />}
        products={newArrivals}
        featuredIndex={1}
      />
    </div>
  );
}

function ProductRow({ product, featured }) {
    const navigate = useNavigate();
  return (
    <li
      onClick={() => navigate(`/product/${product.id}`)}
      className={
        "group grid cursor-pointer grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border p-2.5 transition-all duration-300 sm:gap-4 sm:p-3 sm:hover:-translate-y-0.5 " +
        (featured
          ? "border-lime-400/50 bg-lime-400/[0.07] shadow-[0_10px_30px_-18px_rgba(190,242,100,0.45)]"
          : "border-white/10 bg-zinc-800/60 hover:border-lime-400/40 hover:bg-zinc-800")
      }
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        loading="lazy"
        className="h-11 w-11 shrink-0 rounded-xl bg-zinc-700 object-cover ring-1 ring-white/10 sm:h-12 sm:w-12"
      />

      <div className="min-w-0">
        <p className="truncate text-sm font-medium tracking-tight text-zinc-50">
          {product.title}
        </p>
        <p className="mt-0.5 truncate text-[10px] uppercase tracking-[0.14em] text-zinc-400 sm:text-[11px]">
          {product.category} · {product.rating}
        </p>
        <span className="mt-1 block font-mono text-sm font-semibold text-lime-300 sm:hidden">
          ${product.price}
        </span>
      </div>

      <div className="flex shrink-0 items-center gap-2 sm:gap-4">
        <span className="hidden font-mono text-sm font-semibold text-lime-300 sm:inline">
          ${product.price}
        </span>
        <button
          type="button"
          aria-label={`Add ${product.title} to cart`}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-zinc-700/50 text-zinc-300 transition-colors duration-200 hover:border-lime-400/60 hover:bg-lime-400 hover:text-zinc-900 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-lime-400 sm:group-hover:border-lime-400/60 sm:group-hover:bg-lime-400 sm:group-hover:text-zinc-900"
        >
          <ArrowRightFromLine className="h-4 w-4" />
        </button>
      </div>
    </li>
  );
}

function Panel({ title, icon, products, featuredIndex }) {
    const navigate = useNavigate();
  
  return (
    <section className="rounded-3xl border mb-5 border-white/10 bg-zinc-900 p-4 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.8)] sm:rounded-[28px] sm:p-6">
      <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 pb-4 sm:pb-5">
        <h2 className="flex min-w-0 items-center gap-2.5 text-base font-semibold tracking-tight text-zinc-50 sm:text-lg">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-lime-400/15 text-lime-300">
            {icon}
          </span>
          <span className="truncate">{title}</span>
        </h2>
        <button onClick={()=>navigate("/shop")}
          type="button"
          className="group inline-flex cursor-pointer shrink-0 items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-lime-300 hover:text-lime-200 sm:text-xs"
        >
          See all
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
        </button>
      </header>

      <ul className="space-y-2 sm:space-y-2.5">
        {products.length === 0 && (
          <li className="rounded-2xl border border-white/10 bg-zinc-800/40 p-4 text-center text-xs text-zinc-400">
            Loading products...
          </li>
        )}

        {products.map((product, index) => (
          <ProductRow
            key={product.id}
            product={product}
            featured={index === featuredIndex}
          />
        ))}
      </ul>
    </section>
  );
}

export default ProductShowcase;
