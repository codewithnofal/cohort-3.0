import axios from "axios";
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
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

function SingleProduct() {
   let { id } = useParams();
  let navigate =  useNavigate()

    const [product, setProduct] = useState({});

    const getSingleProductsData = async () => {
      try {
        const res = await axios.get(`https://dummyjson.com/products/${id}`);
        console.log(res.data);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      getSingleProductsData();
    }, []);
  return (
    <section className="bg-black text-white px-8 lg:px-20 xl:px-28 py-6 lg:py-8">
      {/* Breadcrumb */}
      <div className="flex items-center px-20 gap-2 text-xs text-neutral-400 mb-5">
        <button onClick={() => navigate("/shop")} className="inline-flex items-center gap-1 hover:text-white transition">
          <ChevronLeft className="h-3.5 w-3.5" />
          Products
        </button>

        <span>/</span>

        <span className="hover:text-white cursor-pointer transition">
          {product.category}
        </span>

        <span>/</span>

        <span className="text-white">{product.title}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">
        {/* Product Image */}
        <div className="w-full max-w-[460px] mx-auto rounded-3xl bg-white p-6 flex items-center justify-center">
          <img
            src={product.images}
            alt={product.title}
            className="w-full aspect-[4/3] object-contain rounded-xl"
          />
        </div>

        {/* Product Details */}
        <div className="flex px-10 flex-col">
          <span className="inline-block self-start rounded-full bg-[#c6f24e]/15 border border-[#c6f24e]/40 text-[#c6f24e] text-xs font-bold px-3 py-1">
            {product.category}
          </span>

          <h1 className="mt-3 text-2xl lg:text-3xl font-bold tracking-tight leading-tight">
            {product.title}
          </h1>

          {/* Rating */}
          <div className="mt-3 flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.round(product.rating)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-neutral-700"
                  }`}
                />
              ))}
            </div>

            <span className="text-sm font-semibold ml-1">{product.rating}</span>

            <span className="text-xs text-neutral-500">
              {/* ({product.reviews} reviews) */}
            </span>
          </div>

          <div className="my-4 h-px bg-white/10" />

          {/* Price */}
          <div className="text-3xl lg:text-4xl font-bold text-[#c6f24e]">
            ${product.price}
          </div>

          <div className="my-4 h-px bg-white/10" />

          {/* Description */}
          <p className="text-sm text-neutral-400 leading-relaxed max-w-md">
            {product.description}
          </p>

          {/* Actions */}
          <div className="mt-5 flex items-center gap-3">
            <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#c6f24e] text-black px-5 py-3 text-sm font-bold hover:brightness-110 transition">
              <ShoppingCart className="h-4 w-4" />
              Add to Cart
            </button>

            <button className="grid place-items-center h-11 w-11 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition">
              <Heart className="h-4 w-4" />
            </button>
          </div>

          {/* Info Cards */}
          <div className="mt-4 grid grid-cols-3 gap-2.5">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-3 text-center">
              <Truck className="h-4 w-4 mx-auto text-[#c6f24e]" />
              <p className="mt-1.5 text-xs font-bold">Free Delivery</p>
              <p className="text-[10px] text-neutral-500 mt-0.5">
                On orders $50+
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-3 text-center">
              <Shield className="h-4 w-4 mx-auto text-[#c6f24e]" />
              <p className="mt-1.5 text-xs font-bold">Secure Pay</p>
              <p className="text-[10px] text-neutral-500 mt-0.5">256-bit SSL</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-3 text-center">
              <RotateCcw className="h-4 w-4 mx-auto text-[#c6f24e]" />
              <p className="mt-1.5 text-xs font-bold">Easy Returns</p>
              <p className="text-[10px] text-neutral-500 mt-0.5">
                30-day policy
              </p>
            </div>
          </div>

          {/* Previous / Next */}
          <div className="mt-4 grid grid-cols-2 gap-3">
            <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/[0.04] border border-white/10 px-4 py-2.5 text-sm font-semibold hover:bg-white/[0.08] transition">
              <ChevronLeft className="h-4 w-4" />
              Previous
            </button>

            <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#c6f24e] text-black px-4 py-2.5 text-sm font-bold hover:brightness-110 transition">
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProduct;
