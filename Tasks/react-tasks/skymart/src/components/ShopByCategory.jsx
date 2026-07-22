import {
  Smartphone,
  Shirt,
  Home,
  Sparkles,
  Dumbbell,
  BookOpen,
  ArrowRight,
} from "lucide-react";
const categories = [
  {
    name: "Electronics",
    count: "120+ items",
    icon: Smartphone,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    ring: "ring-blue-500/20",
  },
  {
    name: "Fashion",
    count: "240+ items",
    icon: Shirt,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    ring: "ring-pink-500/20",
  },
  {
    name: "Home & Living",
    count: "80+ items",
    icon: Home,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    ring: "ring-amber-500/20",
  },
  {
    name: "Beauty",
    count: "60+ items",
    icon: Sparkles,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    ring: "ring-purple-500/20",
  },
  {
    name: "Sports",
    count: "45+ items",
    icon: Dumbbell,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    ring: "ring-emerald-500/20",
  },
  {
    name: "Books",
    count: "150+ items",
    icon: BookOpen,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    ring: "ring-orange-500/20",
  },
];
function ShopByCategory() {
  return (
    <section className="bg-black text-white px-6 lg:px-12 py-12">
      <div className="flex items-end justify-between mb-8 gap-4 flex-wrap">
        <div>
          <p className="text-xs font-semibold tracking-[0.25em] text-[#c6f24e] mb-2">
            BROWSE
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
            Shop by Category
          </h2>
          <p className="mt-2 text-sm text-neutral-400">
            Find exactly what you're looking for.
          </p>
        </div>
        <button className="inline-flex items-center gap-2 text-sm font-semibold text-[#c6f24e] hover:underline">
          View all <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((c) => {
          const Icon = c.icon;
          return (
            <button
              key={c.name}
              className="group flex flex-col items-center text-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-5 hover:border-[#c6f24e]/40 hover:bg-white/[0.04] transition"
            >
              <div
                className={`h-14 w-14 rounded-2xl ring-1 ${c.ring} ${c.bg} flex items-center justify-center group-hover:scale-105 transition`}
              >
                <Icon className={`h-6 w-6 ${c.color}`} />
              </div>
              <div>
                <div className="text-sm font-semibold">{c.name}</div>
                <div className="text-xs text-neutral-500 mt-0.5">{c.count}</div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
export default ShopByCategory;
