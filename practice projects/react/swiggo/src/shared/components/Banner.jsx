import { BadgePercent, Bike, Clock } from "lucide-react";

// Small banner strip — pure UI, koi logic nahi.
export default function Banner() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pt-6 md:px-6 md:pt-8">
      <div className="overflow-hidden rounded-2xl bg-[#1c1c1c] px-5 py-6 md:px-8 md:py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="min-w-0">
            <p className="inline-flex items-center gap-1.5 rounded-full bg-[#fc8019] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
              <BadgePercent className="h-3.5 w-3.5" />
              Flat 50% off
            </p>
            <h1 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-white md:text-4xl">
              Bhookh lagi hai?{" "}
              <span className="text-[#fc8019]">Order in minutes.</span>
            </h1>
            <p className="mt-2 max-w-md text-sm text-[#b5b5b5] md:text-base">
              1774 restaurants around Koramangala, delivering hot food right to
              your door.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:w-72">
            <div className="rounded-xl border border-[#333333] bg-[#242424] px-3 py-3">
              <Bike className="h-4 w-4 text-[#fc8019]" />
              <p className="mt-2 text-sm font-semibold text-white">
                Free delivery
              </p>
              <p className="text-[11px] text-[#9a9a9a]">On orders above ₹199</p>
            </div>
            <div className="rounded-xl border border-[#333333] bg-[#242424] px-3 py-3">
              <Clock className="h-4 w-4 text-[#fc8019]" />
              <p className="mt-2 text-sm font-semibold text-white">
                Under 30 mins
              </p>
              <p className="text-[11px] text-[#9a9a9a]">Superfast arrival</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
