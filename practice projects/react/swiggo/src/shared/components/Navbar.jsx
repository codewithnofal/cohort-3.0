import {
  Search,
  Percent,
  CircleHelp,
  User,
  ShoppingCart,
  ChevronDown,
  Menu,
} from "lucide-react";

// Pure UI. Saari styling Tailwind classes se, component ke andar hi.
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#eeeeee] bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 md:h-20 md:px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fc8019] text-lg font-bold text-white md:h-10 md:w-10">
            S
          </div>
          <span className="hidden text-lg font-bold tracking-tight text-[#1c1c1c] sm:block">
            Swiggo
          </span>
        </div>

        {/* Location */}
        <button
          type="button"
          className="hidden min-w-0 items-center gap-1.5 rounded-lg px-2 py-1.5 text-left transition-colors hover:bg-[#f7f7f7] lg:flex"
        >
          <span className="truncate border-b-2 border-[#1c1c1c] text-sm font-semibold text-[#1c1c1c]">
            Koramangala
          </span>
          <span className="truncate text-sm text-[#7e7e7e]">
            Bengaluru, India
          </span>
          <ChevronDown className="h-4 w-4 shrink-0 text-[#fc8019]" />
        </button>

        {/* Right links */}
        <nav className="ml-auto hidden items-center gap-7 md:flex">
          <button
            type="button"
            className="flex items-center gap-2 text-sm font-medium text-[#3d4152] transition-colors hover:text-[#fc8019]"
          >
            <Search className="h-4 w-4" />
            Search
          </button>

          <button
            type="button"
            className="relative flex items-center gap-2 text-sm font-medium text-[#3d4152] transition-colors hover:text-[#fc8019]"
          >
            <Percent className="h-4 w-4" />
            Offers
            <span className="absolute -top-2.5 right-0 text-[9px] font-bold uppercase text-[#fc8019]">
              new
            </span>
          </button>

          <button
            type="button"
            className="flex items-center gap-2 text-sm font-medium text-[#3d4152] transition-colors hover:text-[#fc8019]"
          >
            <CircleHelp className="h-4 w-4" />
            Help
          </button>

          <button
            type="button"
            className="flex items-center gap-2 text-sm font-medium text-[#3d4152] transition-colors hover:text-[#fc8019]"
          >
            <User className="h-4 w-4" />
            Sign In
          </button>

          <button
            type="button"
            className="flex items-center gap-2 text-sm font-medium text-[#3d4152] transition-colors hover:text-[#fc8019]"
          >
            <span className="relative">
              <ShoppingCart className="h-4 w-4" />
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#1ba672] text-[10px] font-bold text-white">
                2
              </span>
            </span>
            Cart
          </button>
        </nav>

        {/* Mobile */}
        <div className="ml-auto flex items-center gap-2 md:hidden">
          <button
            type="button"
            aria-label="Search"
            className="rounded-lg p-2 text-[#3d4152] transition-colors hover:bg-[#f7f7f7]"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Cart"
            className="relative rounded-lg p-2 text-[#3d4152] transition-colors hover:bg-[#f7f7f7]"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute right-0.5 top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#1ba672] text-[10px] font-bold text-white">
              2
            </span>
          </button>
          <button
            type="button"
            aria-label="Menu"
            className="rounded-lg p-2 text-[#3d4152] transition-colors hover:bg-[#f7f7f7]"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
