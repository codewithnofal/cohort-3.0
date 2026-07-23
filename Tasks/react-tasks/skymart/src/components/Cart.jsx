import {
  ShoppingBag,
  X,
  Plus,
  Minus,
  Trash2,
  ArrowRight,
  Package,
} from "lucide-react";
import { useContext } from "react";
import { AuthStore } from "../context/AuthContext";

const cartItems = [
  {
    id: 1,
    title: "Smart Watch Series 5",
    price: 299.99,
    qty: 4,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Wireless Bluetooth Headphones",
    price: 99.99,
    qty: 1,
    image:
      "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?w=200&auto=format&fit=crop",
  },
];

function Cart({ open = false, onClose = () => {} }) {
  let { currentUser } = useContext(AuthStore);
  console.log(currentUser.cart);

  const isEmpty = currentUser.cart.length === 0;

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />
      <aside
        className={`fixed top-0 right-0 z-[70] h-full w-full sm:w-[420px] bg-black border-l border-white/10 shadow-2xl transform transition-transform duration-300 ease-out flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <ShoppingBag className="h-6 w-6 text-[#c6f24e]" />
            <h2 className="text-xl font-bold text-white">Cart</h2>
            {!isEmpty && (
              <span className="rounded-full bg-[#c6f24e]/15 text-[#c6f24e] text-xs font-semibold px-2.5 py-1">
                {2} items
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="h-9 w-9 rounded-lg flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/5 transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {isEmpty ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <div className="h-20 w-20 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-5">
              <Package className="h-9 w-9 text-neutral-500" />
            </div>
            <h3 className="text-lg font-bold text-white">Cart is empty</h3>
            <p className="mt-1 text-sm text-neutral-500">
              Go shop something cool!
            </p>
            <button className="mt-6 rounded-2xl bg-[#c6f24e] text-black px-6 py-3 text-sm font-bold hover:brightness-110 transition">
              Browse Products
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4">
            {currentUser?.cart?.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-3 flex gap-3"
              >
                <div className="h-20 w-20 shrink-0 rounded-xl bg-white overflow-hidden flex items-center justify-center">
                  <img
                    src={item.images[0] }
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-white leading-snug line-clamp-2">
                    {item.title}
                  </h4>
                  <div className="mt-1 text-lg font-extrabold text-[#c6f24e]">
                    ${item.price}
                  </div>
                  <div className="text-xs text-neutral-500">
                    ${item.price.toFixed(2)} each
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button className="h-7 w-7 rounded-lg border border-white/10 bg-white/[0.03] text-white flex items-center justify-center hover:bg-white/[0.08] transition">
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="min-w-[20px] text-center text-sm font-bold text-white">
                        {item.qty}
                      </span>
                      <button className="h-7 w-7 rounded-lg border border-white/10 bg-white/[0.03] text-white flex items-center justify-center hover:bg-white/[0.08] transition">
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <button className="text-red-500 hover:text-red-400 transition">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!isEmpty && (
          <div className="border-t border-white/10 px-5 py-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-neutral-400 text-sm">Total</span>
              <span className="text-2xl font-extrabold text-white">
                3244
              </span>
            </div>
            <button className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-[#c6f24e] text-black py-3.5 text-base font-bold hover:brightness-110 transition">
              Checkout <ArrowRight className="h-5 w-5" />
            </button>
            <button className="w-full mt-2 py-2 text-sm text-neutral-500 hover:text-neutral-300 transition">
              Clear cart
            </button>
          </div>
        )}
      </aside>
    </>
  );
}

export default Cart;
