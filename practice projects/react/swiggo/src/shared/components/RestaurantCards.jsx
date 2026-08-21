import {
  Star,
  Clock,
  IndianRupee,
  BadgePercent,
  SlidersHorizontal,
} from "lucide-react";

// Cards section. Beginner style — har card alag alag likha hua, koi map nahi.
export default function RestaurantCards() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-10">
      {/* Heading + filters */}
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 md:flex md:justify-between">
        <h2 className="truncate text-xl font-bold tracking-tight text-[#1c1c1c] md:text-2xl">
          1774 restaurants
        </h2>

        <button
          type="button"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[#e2e2e2] px-3 py-1.5 text-xs font-medium text-[#3d4152] transition-colors hover:border-[#1c1c1c] md:hidden"
        >
          <SlidersHorizontal className="h-3.5 w-3.5" />
          Filters
        </button>

        <div className="col-span-2 hidden items-center gap-2 md:flex">
          <button
            type="button"
            className="rounded-full border border-[#1c1c1c] bg-[#1c1c1c] px-3.5 py-1.5 text-xs font-medium text-white"
          >
            Relevance
          </button>
          <button
            type="button"
            className="rounded-full border border-[#e2e2e2] px-3.5 py-1.5 text-xs font-medium text-[#3d4152] transition-colors hover:border-[#1c1c1c]"
          >
            Delivery Time
          </button>
          <button
            type="button"
            className="rounded-full border border-[#e2e2e2] px-3.5 py-1.5 text-xs font-medium text-[#3d4152] transition-colors hover:border-[#1c1c1c]"
          >
            Rating
          </button>
          <button
            type="button"
            className="rounded-full border border-[#e2e2e2] px-3.5 py-1.5 text-xs font-medium text-[#3d4152] transition-colors hover:border-[#1c1c1c]"
          >
            Cost: Low To High
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-full border border-[#e2e2e2] px-3.5 py-1.5 text-xs font-medium text-[#3d4152] transition-colors hover:border-[#1c1c1c]"
          >
            <SlidersHorizontal className="h-3.5 w-3.5" />
            Filters
          </button>
        </div>
      </div>

      <div className="group overflow-hidden rounded-2xl border border-[#eeeeee] bg-white transition-shadow hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
        <div className="relative h-40 overflow-hidden bg-[#f2f2f2]">
          <img
            src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=60"
            alt="Meghana Foods biryani"
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <p className="truncate text-base font-semibold text-[#1c1c1c]">
            Meghana Foods
          </p>
          <p className="mt-0.5 truncate text-xs text-[#7e7e7e]">
            Biryani, Andhra, Seafood
          </p>
          <div className="mt-3 flex items-center gap-3 text-xs text-[#3d4152]">
            <span className="inline-flex items-center gap-1 rounded-md bg-[#1ba672] px-1.5 py-0.5 font-semibold text-white">
              <Star className="h-3 w-3 fill-white" />
              4.4
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3 w-3 text-[#7e7e7e]" />
              38 mins
            </span>
            <span className="inline-flex items-center">
              <IndianRupee className="h-3 w-3 text-[#7e7e7e]" />
              500 for two
            </span>
          </div>
          <div className="mt-3 flex items-center gap-1.5 border-t border-dashed border-[#eeeeee] pt-3 text-xs font-semibold text-[#8a584b]">
            <BadgePercent className="h-3.5 w-3.5" />
            Free delivery
          </div>
        </div>
      </div>
    </section>
  );
}
