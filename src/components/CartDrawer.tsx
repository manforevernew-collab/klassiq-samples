import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";
import { X, Plus, Minus, Trash2, Ruler } from "lucide-react";

export default function CartDrawer() {
  const {
    items,
    removeFromCart,
    updateQuantity,
    totalItems,
    totalPrice,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price);
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-[#0f1f14] border-l border-[#c9a962]/20 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#c9a962]/20">
          <h2 className="text-[#c9a962] font-serif text-lg tracking-[0.15em] uppercase">
            Your Cart ({totalItems})
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 text-[#f5f0e6]/60 hover:text-[#c9a962] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-20 h-20 rounded-full bg-[#c9a962]/10 flex items-center justify-center mb-4">
                <Ruler className="w-8 h-8 text-[#c9a962]/40" />
              </div>
              <p className="text-[#f5f0e6]/60 text-sm tracking-wide">
                Your cart is empty.
              </p>
              <p className="text-[#f5f0e6]/40 text-xs mt-2">
                Explore our collection to find your perfect fit.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-6 px-6 py-2 bg-[#c9a962] text-[#0f1f14] text-sm tracking-[0.1em] uppercase font-medium hover:bg-[#d4b76a] transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 pb-6 border-b border-[#c9a962]/10"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-24 object-cover rounded border border-[#c9a962]/20"
                  />
                  <div className="flex-1">
                    <h3 className="text-[#f5f0e6] text-sm font-medium tracking-wide">
                      {item.name}
                    </h3>
                    <p className="text-[#c9a962] text-sm mt-1 font-medium">
                      {formatPrice(item.price)}
                    </p>
                    {item.measurements && (
                      <p className="text-[#f5f0e6]/40 text-[10px] mt-1">
                        Custom measurements included
                      </p>
                    )}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="w-7 h-7 flex items-center justify-center border border-[#c9a962]/30 text-[#f5f0e6]/60 hover:border-[#c9a962] hover:text-[#c9a962] transition-colors rounded"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-[#f5f0e6] text-sm w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="w-7 h-7 flex items-center justify-center border border-[#c9a962]/30 text-[#f5f0e6]/60 hover:border-[#c9a962] hover:text-[#c9a962] transition-colors rounded"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-1.5 text-[#f5f0e6]/40 hover:text-red-400 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-[#c9a962]/20 bg-[#0a1910]">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[#f5f0e6]/60 text-sm tracking-wide">
                Subtotal
              </span>
              <span className="text-[#c9a962] text-lg font-medium">
                {formatPrice(totalPrice)}
              </span>
            </div>
            <p className="text-[#f5f0e6]/40 text-xs mb-4">
              Shipping calculated at checkout. All items are made-to-order.
            </p>
            <Link
              to="/checkout"
              onClick={() => setIsCartOpen(false)}
              className="block w-full py-3 bg-[#c9a962] text-[#0f1f14] text-center text-sm tracking-[0.15em] uppercase font-semibold hover:bg-[#d4b76a] transition-colors"
            >
              Proceed to Checkout
            </Link>
            <button
              onClick={() => setIsCartOpen(false)}
              className="block w-full py-3 mt-2 border border-[#c9a962]/30 text-[#f5f0e6]/70 text-center text-sm tracking-[0.1em] uppercase hover:border-[#c9a962] hover:text-[#c9a962] transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
