function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="cursor-pointer text-3xl font-bold text-indigo-600">
          ShopEase
        </h1>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          <button className="text-lg  font-medium cursor-pointer text-gray-700 transition hover:text-indigo-600">
            Home
          </button>

          <button className="relative text-lg font-medium cursor-pointer text-gray-700 transition hover:text-indigo-600">
            Cart
            {/* Cart Count */}
            <span className="absolute -right-4 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
              3
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
