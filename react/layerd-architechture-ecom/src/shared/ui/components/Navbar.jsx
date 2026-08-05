import { ShoppingBag, LogOut } from "lucide-react";
import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0A0A0A]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#C6F24E]">
            <ShoppingBag className="h-6 w-6 text-black" />
          </div>

          <div>
            <h1 className="text-xl font-extrabold text-white tracking-wide">
              SkyMart
            </h1>
            <p className="text-xs text-neutral-500">Smart Shopping</p>
          </div>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "text-white font-medium hover:text-[#C6F24E] transition"
                : "text-neutral-400 font-medium hover:text-[#C6F24E] transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to={"/shop"}
            className={({ isActive }) =>
              isActive
                ? "text-white font-medium hover:text-[#C6F24E] transition"
                : "text-neutral-400 font-medium hover:text-[#C6F24E] transition"
            }
          >
            Shop
          </NavLink>

          <NavLink
            to={"/cart"}
            className={({ isActive }) =>
              isActive
                ? "text-white font-medium hover:text-[#C6F24E] transition"
                : "text-neutral-400 font-medium hover:text-[#C6F24E] transition"
            }
          >
            Cart
          </NavLink>

          <NavLink
            to={"/orders"}
            className={({ isActive }) =>
              isActive
                ? "text-white font-medium hover:text-[#C6F24E] transition"
                : "text-neutral-400 font-medium hover:text-[#C6F24E] transition"
            }
          >
            Orders
          </NavLink>
        </div>

        {/* User */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/3 px-4 py-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C6F24E] font-bold text-black">
              N
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-white">Nofal Ali</p>

              <p className="text-xs text-neutral-500">Welcome Back</p>
            </div>
          </div>

          <button className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-2xl border border-white/10 bg-white/3 text-neutral-400 transition hover:border-red-500 hover:bg-red-500/10 hover:text-red-500">
            <LogOut className="h-5 w-5" />
          </button>
        </div>
      </div>
    </nav>
  );
}
