import { Heart, ShoppingCart, ArrowRight } from "lucide-react";
const products = [
  {
    name: "Wireless Headphones",
    category: "Electronics",
    price: "₹2,499",
    old: "₹3,999",
    tag: "NEW",
    gradient: "from-blue-500/30 to-purple-500/20",
  },
  {
    name: "Classic Denim Jacket",
    category: "Fashion",
    price: "₹1,899",
    old: "₹2,799",
    tag: "NEW",
    gradient: "from-pink-500/30 to-orange-500/20",
  },
  {
    name: "Smart Fitness Watch",
    category: "Electronics",
    price: "₹3,299",
    old: "₹4,499",
    tag: "HOT",
    gradient: "from-emerald-500/30 to-teal-500/20",
  },
  {
    name: "Minimalist Backpack",
    category: "Accessories",
    price: "₹1,299",
    old: "₹1,999",
    tag: "NEW",
    gradient: "from-amber-500/30 to-rose-500/20",
  },
];
function NewArrivals() {
  return (
    <section className="bg-black text-white px-6 lg:px-12 py-12">
      <div className="flex items-end justify-between mb-8 gap-4 flex-wrap">
        <div>
          <p className="text-xs font-semibold tracking-[0.25em] text-[#c6f24e] mb-2">
            FRESH DROPS
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
            New Arrivals
          </h2>
          <p className="mt-2 text-sm text-neutral-400">
            Hand-picked products just landed in store.
          </p>
        </div>
        <button className="inline-flex items-center gap-2 text-sm font-semibold text-[#c6f24e] hover:underline">
          View all <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {products.map((p) => (
          <div
            key={p.name}
            className="group rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-[#c6f24e]/40 transition"
          >
            <div
              className={`relative aspect-[4/5] bg-gradient-to-br ${p.gradient} flex items-center justify-center overflow-hidden`}
            >
              <span className="absolute top-3 left-3 rounded-full bg-[#c6f24e] px-2.5 py-1 text-[10px] font-bold tracking-wider text-black">
                {p.tag}
              </span>
              <button className="absolute top-3 right-3 h-9 w-9 rounded-full bg-black/40 backdrop-blur border border-white/10 flex items-center justify-center hover:bg-black/60">
                <Heart className="h-4 w-4" />
              </button>
              <div className="h-24 w-24 rounded-2xl bg-white/10 backdrop-blur-sm group-hover:scale-110 transition" />
            </div>
            <div className="p-4">
              <p className="text-xs text-neutral-500">{p.category}</p>
              <h3 className="mt-1 text-sm font-semibold truncate">{p.name}</h3>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-bold text-[#c6f24e]">
                    {p.price}
                  </span>
                  <span className="text-xs text-neutral-500 line-through">
                    {p.old}
                  </span>
                </div>
                <button className="h-9 w-9 rounded-xl bg-[#c6f24e] text-black flex items-center justify-center hover:brightness-110">
                  <ShoppingCart className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default NewArrivals;
