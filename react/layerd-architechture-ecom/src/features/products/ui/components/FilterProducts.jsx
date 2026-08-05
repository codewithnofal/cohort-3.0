import { Search, Filter } from "lucide-react";
import { useAllCategories } from "../../hooks/useProductsHook";

export default function FilterProducts({ search, setSearch }) {
  let { data, isPending, error } = useAllCategories();

  console.log("category data", data);

  return (
    <div className="mx-auto mb-8 flex w-full max-w-7xl flex-col gap-4 rounded-3xl border border-white/10 bg-[#111111] p-5 md:flex-row md:items-center md:justify-between">
      {/* Search */}
      <div className="relative w-full md:max-w-md">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500"
        />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="w-full rounded-2xl border border-white/10 bg-[#1A1A1A] py-3 pl-12 pr-4 text-white placeholder:text-neutral-500 outline-none transition focus:border-[#C6F24E]"
        />
      </div>

      {/* Category Filter */}
      <div className="relative w-full md:w-64">
        <Filter
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500"
        />

        <select className="w-full cursor-pointer appearance-none rounded-2xl border border-white/10 bg-[#1A1A1A] py-3 pl-12 pr-10 text-white outline-none transition focus:border-[#C6F24E]">
          <option>All Categories</option>
          {data?.map((c) => {
            return (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
