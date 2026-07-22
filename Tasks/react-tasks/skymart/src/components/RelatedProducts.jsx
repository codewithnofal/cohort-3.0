import { ShoppingCart, Star } from "lucide-react";
const related = [
  {
    name: "Running Shoes",
    category: "Clothing",
    price: "$129.99",
    rating: 4,
    reviews: 180,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=70",
  },
  {
    name: "Classic Denim Jacket",
    category: "Clothing",
    price: "$89.99",
    rating: 5,
    reviews: 245,
    img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&auto=format&fit=crop&q=70",
  },
  {
    name: "Casual Sneakers",
    category: "Footwear",
    price: "$74.99",
    rating: 4,
    reviews: 312,
    img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&auto=format&fit=crop&q=70",
  },
  {
    name: "Slim Fit Chinos",
    category: "Clothing",
    price: "$54.99",
    rating: 4,
    reviews: 98,
    img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&auto=format&fit=crop&q=70",
  },
];
function RelatedProducts() {
  return (
    <section className="bg-black text-white px-6 lg:px-12 py-10">
      <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-6">
        Related Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {related.map((p) => (
          <div
            key={p.name}
            className="group rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-[#c6f24e]/40 transition"
          >
            <div className="relative bg-white p-3">
              <span className="absolute top-3 left-3 z-10 rounded-md bg-black/80 text-white text-[10px] font-semibold px-2 py-1">
                {p.category}
              </span>
              <div className="aspect-[4/3] w-full rounded-lg overflow-hidden bg-neutral-100">
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-full w-full object-cover group-hover:scale-105 transition"
                />
              </div>
            </div>
            <div className="p-4">
              <p className="text-xs text-neutral-500">{p.category}</p>
              <h3 className="mt-1 text-sm font-semibold">{p.name}</h3>
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
                <span className="text-lg font-bold text-[#c6f24e]">
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
export default RelatedProducts;
