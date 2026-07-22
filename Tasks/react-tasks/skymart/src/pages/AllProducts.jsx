import { Search, ChevronDown, ShoppingCart, Star } from "lucide-react";
const products = [
  {
    name: "Wireless Bluetooth Headphones",
    category: "Electronics",
    price: "$99.99",
    rating: 5,
    reviews: 120,
    img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&auto=format&fit=crop&q=70",
  },
  {
    name: "Smart Watch Series 5",
    category: "Electronics",
    price: "$299.99",
    rating: 4,
    reviews: 85,
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=70",
  },
  {
    name: "Comfortable Cotton T-Shirt",
    category: "Clothing",
    price: "$24.99",
    rating: 4,
    reviews: 200,
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop&q=70",
  },
  {
    name: "Ergonomic Office Chair",
    category: "Furniture",
    price: "$199.99",
    rating: 5,
    reviews: 65,
    img: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=600&auto=format&fit=crop&q=70",
  },
  {
    name: "Stainless Steel Water Bottle",
    category: "Home",
    price: "$34.99",
    rating: 4,
    reviews: 150,
    img: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&auto=format&fit=crop&q=70",
  },
  {
    name: "Leather Crossbody Bag",
    category: "Accessories",
    price: "$79.99",
    rating: 5,
    reviews: 98,
    img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&auto=format&fit=crop&q=70",
  },
  {
    name: "Wireless Charging Pad",
    category: "Electronics",
    price: "$29.99",
    rating: 4,
    reviews: 320,
    img: "https://images.unsplash.com/photo-1591290619762-c5a5b9c3f6ac?w=600&auto=format&fit=crop&q=70",
  },
  {
    name: "Running Sneakers",
    category: "Footwear",
    price: "$89.99",
    rating: 5,
    reviews: 410,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=70",
  },
  {
    name: "Ceramic Plant Pot",
    category: "Home",
    price: "$18.99",
    rating: 4,
    reviews: 75,
    img: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&auto=format&fit=crop&q=70",
  },
  {
    name: "Minimalist Desk Lamp",
    category: "Home",
    price: "$49.99",
    rating: 5,
    reviews: 143,
    img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&auto=format&fit=crop&q=70",
  },
];
function AllProducts() {
  return (
    <section className="bg-black text-white px-6 lg:px-12 py-10 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
          All Products
        </h1>
        <p className="mt-2 text-sm text-neutral-500">50 products found</p>
      </div>
      {/* Search + Filters bar */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-3 flex flex-col md:flex-row items-stretch md:items-center gap-3 mb-8">
        <div className="flex items-center gap-3 flex-1 rounded-xl bg-black/40 border border-white/5 px-4 py-3">
          <Search className="h-4 w-4 text-neutral-500" />
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none w-full text-sm placeholder:text-neutral-500"
          />
        </div>
        <div className="relative">
          <select className="appearance-none rounded-xl bg-black/40 border border-white/10 pl-4 pr-10 py-3 text-sm outline-none cursor-pointer hover:border-white/20">
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Clothing</option>
            <option>Home</option>
            <option>Furniture</option>
          </select>
          <ChevronDown className="h-4 w-4 text-neutral-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
        <div className="relative">
          <select className="appearance-none rounded-xl bg-black/40 border border-[#c6f24e]/50 pl-4 pr-10 py-3 text-sm outline-none cursor-pointer text-[#c6f24e]">
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Top Rated</option>
          </select>
          <ChevronDown className="h-4 w-4 text-[#c6f24e] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {products.map((p) => (
          <div
            key={p.name}
            className="group rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-[#c6f24e]/40 transition"
          >
            <div className="relative bg-white p-3">
              <span className="absolute top-3 left-3 z-10 rounded-md bg-black/80 text-white text-[10px] font-semibold px-2 py-1">
                {p.category}
              </span>
              <div className="aspect-[4/3] w-full rounded-lg overflow-hidden bg-neutral-100 flex items-center justify-center">
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-full w-full object-cover group-hover:scale-105 transition"
                />
              </div>
            </div>
            <div className="p-4">
              <p className="text-xs text-neutral-500">{p.category}</p>
              <h3 className="mt-1 text-sm font-semibold leading-snug min-h-[2.5rem]">
                {p.name}
              </h3>
              <div className="mt-2 flex items-center gap-1.5">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3.5 w-3.5 ${
                        i < p.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-neutral-700"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-neutral-500">({p.reviews})</span>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xl font-bold text-[#c6f24e]">
                  {p.price}
                </span>
                <button className="inline-flex items-center gap-1.5 rounded-full bg-[#c6f24e] text-black px-3.5 py-1.5 text-xs font-bold hover:brightness-110">
                  <ShoppingCart className="h-3.5 w-3.5" /> Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default AllProducts;
