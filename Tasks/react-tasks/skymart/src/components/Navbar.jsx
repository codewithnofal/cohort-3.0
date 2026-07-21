import { Zap, ShoppingCart, LogOut } from "lucide-react";
function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 lg:px-12 py-5 bg-black text-white">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="h-11 w-11 rounded-xl bg-[#c6f24e] flex items-center justify-center">
          <Zap className="h-6 w-6 text-black" fill="black" strokeWidth={2.5} />
        </div>
        <span className="text-2xl font-bold tracking-tight">
          Sky<span className="text-white">Mart</span>
        </span>
      </div>
      {/* Nav links */}
      <div className="hidden md:flex items-center gap-10 text-sm font-medium">
        <a href="#" className="text-[#c6f24e]">
          Home
        </a>
        <a href="#" className="text-neutral-300 hover:text-white">
          Shop
        </a>
        <a href="#" className="text-neutral-300 hover:text-white">
          About
        </a>
      </div>
      {/* Right side */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2">
          <div className="h-7 w-7 rounded-md bg-[#c6f24e] text-black text-xs font-bold flex items-center justify-center">
            N
          </div>
          <span className="hidden sm:block text-sm font-medium">nofal</span>
        </div>
        <button className="h-11 w-11 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center hover:bg-white/[0.06]">
          <ShoppingCart className="h-5 w-5" />
        </button>
        <button className="h-11 w-11 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center hover:bg-white/[0.06]">
          <LogOut className="h-5 w-5" />
        </button>
      </div>
    </nav>
  );
}
export default Navbar;
