import { Zap, ShoppingCart, LogOut, Menu, X } from "lucide-react";
import { useContext, useState } from "react";
import { NavLink } from "react-router";
import { AuthStore } from "../context/AuthContext";
import Cart from "./Cart";

function Navbar() {
  const { currentUser } = useContext(AuthStore);
  const cartCount = 5;
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-[#c6f24e]"
      : "text-neutral-300 hover:text-white transition";

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 w-full flex items-center justify-between px-6 lg:px-12 py-5 bg-black text-white border-b border-white/5">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className=" h-9 sm:h-11 w-9 sm:w-11 rounded-xl bg-[#c6f24e] flex items-center justify-center">
            <Zap
              className=" h-4 w-4 sm:h-6 sm:w-6 text-black"
              fill="black"
              strokeWidth={2.5}
            />
          </div>
          <span className=" text-xl sm:text-2xl font-bold tracking-tight">
            Sky<span className="text-[#c6f24e]">Mart</span>
          </span>
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/shop" className={linkClass}>
            Shop
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
        </div>

        {/* Right side (desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2">
            <div className="h-7 w-7 rounded-md bg-[#c6f24e] text-black text-xs font-bold flex items-center justify-center">
              {currentUser.firstLetter}
            </div>
            <span className="text-sm font-medium">{currentUser.name}</span>
          </div>

          <button
            onClick={() => setCartOpen(true)}
            className="relative h-11 w-11 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center hover:bg-white/[0.06]"
          >
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 rounded-full bg-[#c6f24e] text-black text-[11px] font-bold flex items-center justify-center border-2 border-black">
                {cartCount}
              </span>
            )}
          </button>

          <button className="h-11 w-11 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center hover:bg-white/[0.06]">
            <LogOut className="h-5 w-5" />
          </button>
        </div>

        {/* Right side (mobile) */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setCartOpen(true)}
            className="relative h-11 w-11 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center hover:bg-white/[0.06]"
          >
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 rounded-full bg-[#c6f24e] text-black text-[11px] font-bold flex items-center justify-center border-2 border-black">
                {cartCount}
              </span>
            )}
          </button>
          <button className="h-11 w-11 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center hover:bg-white/[0.06]">
            <LogOut className="h-5 w-5" />
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="h-11 w-11 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center hover:bg-white/[0.06]"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-[84px]" />

      {/* Mobile top-down dropdown menu */}
      <div
        className={`fixed left-0 right-0 top-[84px] z-40 md:hidden bg-black border-b border-white/10 overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-6 gap-5 text-base font-semibold">
          <NavLink to="/" onClick={() => setOpen(false)} className={linkClass}>
            Home
          </NavLink>
          <NavLink
            to="/shop"
            onClick={() => setOpen(false)}
            className={linkClass}
          >
            Shop
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setOpen(false)}
            className={linkClass}
          >
            About
          </NavLink>
          <button className="flex items-center gap-2 text-red-500 hover:text-red-400 transition text-left">
            <LogOut className="h-5 w-5" />
            Logout
          </button>
        </div>
      </div>

      <Cart open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}

export default Navbar;
