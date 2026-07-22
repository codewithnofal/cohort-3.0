import {
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  Heart,
  Star,
  Truck,
  Shield,
  RotateCcw,
} from "lucide-react";
const product = {
  id: 1,
  title: "Essence Mascara Lash Princess",
  category: "beauty",
  brand: "Essence",
  description:
    "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
  price: 9.99,
  discountPercentage: 10.48,
  rating: 2.56,
  stock: 99,
  availabilityStatus: "In Stock",
  sku: "BEA-ESS-ESS-001",
  weight: 4,
  minimumOrderQuantity: 48,
  shippingInformation: "Ships in 3-5 business days",
  warrantyInformation: "1 week warranty",
  returnPolicy: "No return policy",
  tags: ["beauty", "mascara"],
  thumbnail:
    "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
  reviews: 3,
};
function SingleProduct() {
  const rounded = Math.round(product.rating);
  return (
    <section className="bg-black text-white px-6 lg:px-12 py-8 min-h-screen">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-neutral-400 mb-6">
        <button className="inline-flex items-center gap-1 hover:text-white">
          <ChevronLeft className="h-4 w-4" /> Products
        </button>
        <span>/</span>
        <span className="hover:text-white cursor-pointer capitalize">
          {product.category}
        </span>
        <span>/</span>
        <span className="text-white">{product.title}</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image */}
        <div className="rounded-3xl bg-white p-6 flex items-center justify-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="max-h-[520px] w-full object-contain"
          />
        </div>
        {/* Details */}
        <div>
          <span className="inline-block rounded-full bg-[#c6f24e]/15 border border-[#c6f24e]/40 text-[#c6f24e] text-xs font-bold px-3 py-1 capitalize">
            {product.category}
          </span>
          <h1 className="mt-4 text-3xl lg:text-5xl font-bold tracking-tight">
            {product.title}
          </h1>
          <div className="mt-3 flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < rounded
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-neutral-700"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-semibold">{product.rating}</span>
            <span className="text-sm text-neutral-500">
              ({product.reviews} reviews)
            </span>
          </div>
          <div className="my-5 h-px bg-white/10" />
          <div className="flex items-baseline gap-3">
            <span className="text-4xl lg:text-5xl font-bold text-[#c6f24e]">
              ${product.price}
            </span>
            <span className="text-sm text-neutral-500 line-through">
              $
              {(product.price / (1 - product.discountPercentage / 100)).toFixed(
                2,
              )}
            </span>
            <span className="text-xs font-bold text-[#c6f24e]">
              -{product.discountPercentage}%
            </span>
          </div>
          <div className="my-5 h-px bg-white/10" />
          <p className="text-sm text-neutral-400 leading-relaxed">
            {product.description}
          </p>
          {/* Meta grid */}
          <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
              <p className="text-xs text-neutral-500">Brand</p>
              <p className="font-semibold">{product.brand}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
              <p className="text-xs text-neutral-500">SKU</p>
              <p className="font-semibold">{product.sku}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
              <p className="text-xs text-neutral-500">Stock</p>
              <p className="font-semibold text-[#c6f24e]">
                {product.stock} — {product.availabilityStatus}
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
              <p className="text-xs text-neutral-500">Min. Order</p>
              <p className="font-semibold">
                {product.minimumOrderQuantity} units
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
              <p className="text-xs text-neutral-500">Weight</p>
              <p className="font-semibold">{product.weight}g</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
              <p className="text-xs text-neutral-500">Warranty</p>
              <p className="font-semibold">{product.warrantyInformation}</p>
            </div>
          </div>
          {/* Tags */}
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="text-xs text-neutral-500">Tags:</span>
            {product.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs capitalize"
              >
                #{t}
              </span>
            ))}
          </div>
          {/* Actions */}
          <div className="mt-6 flex items-center gap-3">
            <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#c6f24e] text-black px-6 py-4 text-sm font-bold hover:brightness-110">
              <ShoppingCart className="h-4 w-4" /> Add to Cart
            </button>
            <button className="grid place-items-center h-14 w-14 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.06]">
              <Heart className="h-5 w-5" />
            </button>
          </div>
          {/* Info cards */}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-center">
              <Truck className="h-5 w-5 mx-auto text-[#c6f24e]" />
              <p className="mt-2 text-sm font-bold">Free Delivery</p>
              <p className="text-[11px] text-neutral-500">
                {product.shippingInformation}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-center">
              <Shield className="h-5 w-5 mx-auto text-[#c6f24e]" />
              <p className="mt-2 text-sm font-bold">Secure Pay</p>
              <p className="text-[11px] text-neutral-500">256-bit SSL</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-center">
              <RotateCcw className="h-5 w-5 mx-auto text-[#c6f24e]" />
              <p className="mt-2 text-sm font-bold">Returns</p>
              <p className="text-[11px] text-neutral-500">
                {product.returnPolicy}
              </p>
            </div>
          </div>
          {/* Prev / Next */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <button className="inline-flex items-center justify-center gap-2 rounded-full bg-white/[0.05] border border-white/10 px-5 py-3 text-sm font-semibold hover:bg-white/[0.08]">
              <ChevronLeft className="h-4 w-4" /> Previous
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c6f24e] text-black px-5 py-3 text-sm font-bold hover:brightness-110">
              Next <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SingleProduct;
