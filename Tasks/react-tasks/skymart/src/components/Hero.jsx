import { ArrowRight, Package, TrendingUp, Star, Tag } from "lucide-react";
function Hero() {
  return (
    <section className="bg-black text-white px-6 lg:px-12 py-8">
      {/* Hero card */}
      <div className="relative overflow-hidden rounded-3xl border border-white/50 p-8 lg:p-14">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          {/* Left */}
          <div className="max-w-2xl">
            <p className="text-xs sm:text-lg  font-semibold tracking-[0.1em] text-[#c6f24e] mb-5">
              GOOD EVENING 👋
            </p>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-[1.02]">
              Welcome back,
              <br />
              <span className="text-[#c6f24e]">nofal!</span>
            </h1>
            <p className="mt-6 text-neutral-400 text-base lg:text-lg leading-relaxed max-w-lg">
              Discover today's picks — hand-curated products across electronics,
              fashion, and more.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-full bg-[#c6f24e] px-6 py-3.5 text-sm font-semibold text-black hover:brightness-110">
                Shop Now <ArrowRight className="h-4 w-4" />
              </button>
              <button className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/[0.06]">
                View All Products
              </button>
            </div>
          </div>
          {/* Right cards */}
          <div className="flex flex-col gap-4 w-full lg:w-auto">
            <div className="rounded-2xl border border-[#c6f24e]/30 bg-[#c6f24e]/10 px-8 py-6 text-center min-w-[220px]">
              <div className="text-4xl font-bold text-[#c6f24e]">20+</div>
              <div className="mt-1 text-sm text-neutral-300">
                Products Available
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-8 py-6 text-center min-w-[220px]">
              <div className="text-4xl font-bold text-white">Free</div>
              <div className="mt-1 text-sm text-neutral-400">
                Delivery on ₹999+
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Stat row */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={<Package className="h-5 w-5 text-[#c6f24e]" />}
          iconBg="bg-[#c6f24e]/10"
          value="0"
          label="Cart Items"
          sub="In your bag"
        />
        <StatCard
          icon={<TrendingUp className="h-5 w-5 text-blue-400" />}
          iconBg="bg-blue-500/10"
          value="$0.00"
          label="Cart Value"
          sub="Ready to checkout"
        />
        <StatCard
          icon={<Star className="h-5 w-5 text-yellow-400" />}
          iconBg="bg-yellow-500/10"
          value="5"
          label="Top Products"
          sub="Highly rated"
        />
        <StatCard
          icon={<Tag className="h-5 w-5 text-purple-400" />}
          iconBg="bg-purple-500/10"
          value="6"
          label="Categories"
          sub="To explore"
        />
      </div>
    </section>
  );
}
function StatCard({ icon, iconBg, value, label, sub }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-5">
      <div
        className={`h-12 w-12 rounded-xl flex items-center justify-center ${iconBg}`}
      >
        {icon}
      </div>
      <div>
        <div className="text-2xl font-bold text-white leading-tight">
          {value}
        </div>
        <div className="text-sm font-medium text-neutral-300">{label}</div>
        <div className="text-xs text-neutral-500">{sub}</div>
      </div>
    </div>
  );
}
export default Hero;
