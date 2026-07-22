import { Star, ShoppingCart, ArrowRight } from "lucide-react";
const products = [
  {
    name: "Premium Leather Wallet",
    category: "Accessories",
    price: "₹1,499",
    rating: 4.9,
    reviews: 1284,
    gradient: "from-amber-500/30 to-orange-500/20",
  },
  {
    name: "Noise Cancelling Earbuds",
    category: "Electronics",
    price: "₹4,299",
    rating: 4.8,
    reviews: 2156,
    gradient: "from-cyan-500/30 to-blue-500/20",
  },
  {
    name: "Cotton Casual T-Shirt",
    category: "Fashion",
    price: "₹799",
    rating: 4.9,
    reviews: 3421,
    gradient: "from-rose-500/30 to-pink-500/20",
  },
  {
    name: "Ceramic Coffee Mug Set",
    category: "Home",
    price: "₹999",
    rating: 4.7,
    reviews: 892,
    gradient: "from-emerald-500/30 to-lime-500/20",
  },
];
function TopRated() {
  return (
    <section className="bg-black text-white px-6 lg:px-12 py-12">
      <div className="flex items-end justify-between mb-8 gap-4 flex-wrap">
        <div>
          <p className="text-xs font-semibold tracking-[0.25em] text-[#c6f24e] mb-2">
            CUSTOMER FAVORITES
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
            Top Rated
          </h2>
          <p className="mt-2 text-sm text-neutral-400">
            Loved by thousands, rated 4.7 and above.
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
            className="group rounded-2xl border border-white/10 bg-white/[0.02] p-4 hover:border-[#c6f24e]/40 transition"
          >
            <div
              className={`relative aspect-square rounded-xl bg-gradient-to-br ${p.gradient} flex items-center justify-center overflow-hidden`}
            >
              <div className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-black/50 backdrop-blur border border-white/10 px-2.5 py-1">
                <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                <span className="text-[11px] font-semibold">{p.rating}</span>
              </div>
              <div className="h-24 w-24 rounded-2xl bg-white/10 backdrop-blur-sm group-hover:scale-110 transition" />
            </div>
            <div className="mt-4">
              <p className="text-xs text-neutral-500">{p.category}</p>
              <h3 className="mt-1 text-sm font-semibold truncate">{p.name}</h3>
              <div className="mt-2 flex items-center gap-1.5">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-xs text-neutral-500">
                  ({p.reviews.toLocaleString()})
                </span>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-lg font-bold text-[#c6f24e]">
                  {p.price}
                </span>
                <button className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.05] border border-white/10 px-3 py-1.5 text-xs font-semibold hover:bg-white/[0.08]">
                  <ShoppingCart className="h-3.5 w-3.5" /> Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default TopRated;
