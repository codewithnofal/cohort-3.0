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
  Check,
  Minus,
  Plus,
} from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AuthStore } from "../context/AuthContext";
import { ProdStore } from "../context/productContext";
import RelatedProducts from "../components/RelatedProducts";

function SingleProduct() {
  let { id } = useParams();
  let navigate = useNavigate();

  let { currentUser, setCurrentUser, users } = useContext(AuthStore);

  const [product, setProduct] = useState({});
  const [toggle, setToggle] = useState(true);

  const getSingleProductsData = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/products/${id}`);
      console.log(res.data);
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  // [][758758]

  useEffect(() => {
    getSingleProductsData();
  }, [id]);

  const addToCart = (id) => {
    let isAvailable = currentUser.cart.find((u) => {
      return u.id === id;
    });

    if (isAvailable) {
      return;
    } else {
      let cartData = {
        ...currentUser,
        cart: [...currentUser.cart, { ...product, quantity: 1 }],
      };
      setCurrentUser(cartData);
      localStorage.setItem("currUser", JSON.stringify(cartData));

      let index = users.findIndex((u) => u.id === cartData.id);
      users[index] = cartData;
      localStorage.setItem("users", JSON.stringify(users));
    }

    console.log(product);
    console.log(currentUser.cart);
  };

  const setIncrement = (id) => {
    let updateQuantity = currentUser.cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });

    const updatedUser = { ...currentUser, cart: updateQuantity };
    setCurrentUser(updatedUser);
    localStorage.setItem("currUser", JSON.stringify(updatedUser));

    let index = users.findIndex((u) => u.id === updatedUser.id);

    users[index] = updatedUser;

    localStorage.setItem("users", JSON.stringify(users));
  };

  const setDecrement = (id) => {
    let product = currentUser.cart.find((item) => item.id === id);

    if (product.quantity === 1) {
      deleteItem(id);
      return;
    }

    let updateQuantity = currentUser.cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity - 1 };
      } else {
        return item;
      }
    });

    const updatedUser = { ...currentUser, cart: updateQuantity };
    setCurrentUser(updatedUser);
    localStorage.setItem("currUser", JSON.stringify(updatedUser));

    let index = users.findIndex((u) => u.id === updatedUser.id);

    users[index] = updatedUser;

    localStorage.setItem("users", JSON.stringify(users));
  };

  const cartItem = currentUser?.cart?.find((item) => item.id === product.id);

  const isAdded = !!cartItem;

  return (
    <section className="bg-black text-white px-4 lg:px-20 xl:px-28 py-6 lg:py-8">
      {/* Breadcrumb */}

      <>
        {" "}
        {!product ? (
          <div className="col-span-full flex justify-center py-20">
            <PropagateLoader color="#C6F24E" />
          </div>
        ) : (
          <>
            {" "}
            <div className="flex items-center sm:px-30 gap-2 text-xs text-neutral-400 mb-5">
              <button
                onClick={() => navigate("/shop")}
                className="inline-flex items-center gap-1 hover:text-white transition"
              >
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
            <div className="grid grid-cols-1  sm:px-20 lg:grid-cols-2 gap-6 sm:gap-5 items-start">
              {/* Product Image */}
              <div className="w-full max-w-[460px] mx-auto rounded-3xl bg-white p-6 flex items-center justify-center">
                <img
                  src={product?.images?.[0]}
                  alt={product.title}
                  className="w-full aspect-[4/3] object-contain rounded-xl"
                />
              </div>

              {/* Product Details */}
              <div className="flex  sm:px-10 flex-col">
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

                  <span className="text-sm font-semibold ml-1">
                    {product.rating}
                  </span>

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

                {isAdded && (
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 mt-2 bg-white/[0.02] px-5 py-4">
                    <span className="text-sm text-neutral-400">In cart:</span>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setDecrement(product.id)}
                        className="h-9 w-9 rounded-full border border-white/15 bg-transparent text-white flex items-center justify-center hover:bg-white/[0.06] transition"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-[20px] text-center text-base font-bold text-white">
                        {cartItem.quantity}
                      </span>
                      <button
                        onClick={() => setIncrement(product.id)}
                        className="h-9 w-9 rounded-full border border-white/15 bg-transparent text-white flex items-center justify-center hover:bg-white/[0.06] transition"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="mt-5 flex items-center gap-3">
                  <button
                    disabled={isAdded}
                    onClick={() => addToCart(product.id)}
                    className={`flex-1 inline-flex items-center justify-center gap-2 rounded-2xl ${
                      isAdded
                        ? "bg-[#132B1C] text-white cursor-not-allowed"
                        : "bg-[#c6f24e] text-black hover:brightness-110"
                    }text-black px-5 py-3 text-sm font-bold hover:brightness-110 transition`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="h-3.5 w-3.5" />
                        Added
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="h-3.5 w-3.5" />
                        Add to cart
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => setToggle(!toggle)}
                    className={`grid place-items-center cursor-pointer  h-11 w-11 rounded-2xl border ${toggle ? "border-[#5F1111] bg-[#2F1515]" : "border-white/10 bg-white/[0.03]"}  hover:bg-white/[0.06] transition`}
                  >
                    {toggle ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-heart fill-red-400"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                      </svg>
                    ) : (
                      <Heart className="h-5 w-5" />
                    )}
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
                    <p className="text-[10px] text-neutral-500 mt-0.5">
                      256-bit SSL
                    </p>
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
                  <button
                    onClick={() => navigate(`/product/${Number(id) - 1}`)}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/[0.04] border border-white/10 px-4 py-2.5 text-sm font-semibold hover:bg-white/[0.08] transition"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                  </button>

                  <button
                    onClick={() => navigate(`/product/${Number(id) + 1}`)}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#c6f24e] text-black px-4 py-2.5 text-sm font-bold hover:brightness-110 transition"
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>{" "}
          </>
        )}{" "}
      </>

      <RelatedProducts cat={product.category} />
    </section>
  );
}

export default SingleProduct;
