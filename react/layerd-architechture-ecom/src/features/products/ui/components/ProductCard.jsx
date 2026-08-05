import { ShoppingCart, Star, Truck, BadgeCheck } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-[#111111] transition-all duration-300 hover:-translate-y-2 hover:border-[#C6F24E]/40 hover:shadow-2xl">
      {/* Product Image */}
      <div className="relative overflow-hidden bg-white">
        <img
          src={product.images[0]}
          alt={product.title}
          className="aspect-square w-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-black/80 px-3 py-1 text-xs font-semibold capitalize text-white">
          {product.category}
        </span>

        {/* Discount */}
        {product.discountPercentage > 0 && (
          <span className="absolute right-4 top-4 rounded-full bg-[#C6F24E] px-3 py-1 text-xs font-bold text-black">
            {product.discountPercentage}% OFF
          </span>
        )}
      </div>

      {/* Content */}
      <div className="space-y-4 p-5">
        {/* Brand */}
        <p className="text-xs uppercase tracking-widest text-neutral-500">
          {product.brand}
        </p>

        {/* Title */}
        <h2 className="line-clamp-2 text-lg font-bold text-white">
          {product.title}
        </h2>

        {/* Description */}
        <p className="line-clamp-2 text-sm text-neutral-400">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="fill-yellow-400 text-yellow-400" size={18} />

            <span className="font-semibold text-white">{product.rating}</span>

            <span className="text-sm text-neutral-500">
              ({product.reviews.length} Reviews)
            </span>
          </div>

          <div
            className={`rounded-full px-2 py-1 text-xs font-semibold ${
              product.stock > 0
                ? "bg-green-500/15 text-green-400"
                : "bg-red-500/15 text-red-400"
            }`}
          >
            {product.availabilityStatus}
          </div>
        </div>

        {/* Shipping */}
        <div className="flex items-center gap-2 text-sm text-neutral-400">
          <Truck size={16} />
          {product.shippingInformation}
        </div>

        {/* Warranty */}
        <div className="flex items-center gap-2 text-sm text-neutral-400">
          <BadgeCheck size={16} />
          {product.warrantyInformation}
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-3xl font-black text-[#C6F24E]">
              ${product.price}
            </h3>

            <p className="text-xs text-neutral-500">Stock : {product.stock}</p>
          </div>

          <button className="flex cursor-pointer items-center gap-2 rounded-2xl bg-[#C6F24E] px-5 py-3 font-semibold text-black transition hover:brightness-110">
            <ShoppingCart size={18} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
