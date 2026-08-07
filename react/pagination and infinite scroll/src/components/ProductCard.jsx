const ProductCard = ({product}) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.images[0]}
          alt="Product"
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Category Badge */}
        <span className="absolute left-3 top-3 rounded-full bg-black/80 px-3 py-1 text-xs font-medium text-white">
          {product.category}
        </span>

        {/* Discount Badge */}
        <span className="absolute right-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
          {product.discountPercentage}%
        </span>
      </div>

      {/* Product Details */}
      <div className="space-y-4 p-5">
        {/* Title */}
        <div>
          <h3 className="line-clamp-1 text-lg font-semibold text-gray-800">
            {product.title}
          </h3>

          <p className="mt-1 line-clamp-2 text-sm text-gray-500">
           {product.description}
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex text-yellow-400">★★★★★</div>
          <span className="text-sm text-gray-500">(4.8)</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-gray-900">${product.price}</span>
          <span className="text-sm text-gray-400 line-through">$150</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white transition hover:bg-gray-800">
            Add to Cart
          </button>

          <button className="rounded-xl border border-gray-300 p-3 transition hover:bg-gray-100">
            ❤️
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
