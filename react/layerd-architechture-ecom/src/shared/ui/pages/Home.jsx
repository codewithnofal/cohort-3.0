import {
  ArrowRight,
  ShoppingBag,
  Package,
  Truck,
  ShieldCheck,
  Star,
} from "lucide-react";

export default function Home() {
  const categories = [
    "Electronics",
    "Fashion",
    "Beauty",
    "Furniture",
    "Groceries",
    "Sports",
  ];

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Hero */}
      <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-20 lg:flex-row">
        <div className="flex-1">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#C6F24E]/30 bg-[#C6F24E]/10 px-4 py-2 text-sm text-[#C6F24E]">
            <ShoppingBag className="h-4 w-4" />
            New Collection Available
          </span>

          <h1 className="mt-6 text-5xl font-black leading-tight lg:text-7xl">
            Shop Smarter,
            <br />
            <span className="text-[#C6F24E]">Live Better.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-400">
            Explore thousands of premium products with secure payments,
            lightning-fast delivery, and unbeatable prices.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="flex cursor-pointer items-center gap-2 rounded-2xl bg-[#C6F24E] px-6 py-4 font-bold text-black transition hover:brightness-110">
              Shop Now
              <ArrowRight className="h-5 w-5" />
            </button>

            <button className="rounded-2xl border cursor-pointer border-white/10 px-6 py-4 font-semibold hover:bg-white/5 transition">
              Browse Categories
            </button>
          </div>
        </div>

        <div className="mt-16 flex flex-1 justify-center lg:mt-0">
          <div className="flex h-[420px] w-[420px] items-center justify-center rounded-[40px] border border-white/10 bg-gradient-to-br from-[#C6F24E]/20 to-transparent">
            <ShoppingBag className="h-40 w-40 text-[#C6F24E]" />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">Categories</h2>

          <button className="text-[#C6F24E] hover:underline">
            View All
          </button>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((item) => (
            <div
              key={item}
              className="cursor-pointer rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-center transition hover:border-[#C6F24E]/40 hover:bg-white/[0.05]"
            >
              <Package className="mx-auto h-10 w-10 text-[#C6F24E]" />

              <h3 className="mt-4 font-semibold">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold">
          Why Shop With Us?
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <Truck className="h-12 w-12 text-[#C6F24E]" />

            <h3 className="mt-5 text-xl font-bold">
              Fast Delivery
            </h3>

            <p className="mt-2 text-neutral-400">
              Get your products delivered quickly and safely right to your
              doorstep.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <ShieldCheck className="h-12 w-12 text-[#C6F24E]" />

            <h3 className="mt-5 text-xl font-bold">
              Secure Shopping
            </h3>

            <p className="mt-2 text-neutral-400">
              Shop confidently with secure authentication and encrypted
              transactions.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <Star className="h-12 w-12 text-[#C6F24E]" />

            <h3 className="mt-5 text-xl font-bold">
              Top Rated Products
            </h3>

            <p className="mt-2 text-neutral-400">
              Browse thousands of highly rated products loved by customers.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-[40px] border border-[#C6F24E]/20 bg-gradient-to-r from-[#C6F24E]/10 to-transparent px-10 py-16 text-center">
          <h2 className="text-4xl font-black">
            Ready to Start Shopping?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
            Discover amazing deals, premium products, and an effortless
            shopping experience all in one place.
          </p>

          <button className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-2xl bg-[#C6F24E] px-8 py-4 font-bold text-black transition hover:brightness-110">
            Explore Store
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>
    </main>
  );
}