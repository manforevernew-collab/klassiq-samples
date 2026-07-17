import { Link } from "react-router-dom";
import { ShoppingBag, Eye } from "lucide-react";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  return (
    <div className="group relative bg-[#0f1f14] border border-[#c9a962]/10 hover:border-[#c9a962]/30 transition-all duration-500">
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[3/4]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 px-3 py-1 bg-[#c9a962] text-[#0f1f14] text-[10px] tracking-[0.15em] uppercase font-semibold">
            {product.badge}
          </div>
        )}

        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute top-3 right-3 px-3 py-1 bg-red-800/90 text-white text-[10px] tracking-wider font-medium">
            -{discount}%
          </div>
        )}

        {/* Quick Actions */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <Link
            to={`/product/${product.id}`}
            className="w-12 h-12 flex items-center justify-center bg-white/90 text-[#0f1f14] hover:bg-[#c9a962] transition-colors duration-300"
          >
            <Eye className="w-5 h-5" />
          </Link>
          <button
            onClick={() => addToCart(product)}
            className="w-12 h-12 flex items-center justify-center bg-[#c9a962] text-[#0f1f14] hover:bg-[#d4b76a] transition-colors duration-300"
          >
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-[#c9a962]/60 text-[10px] tracking-[0.2em] uppercase mb-1">
          {product.category}
        </p>
        <Link to={`/product/${product.id}`}>
          <h3 className="text-[#f5f0e6] text-sm font-medium tracking-wide hover:text-[#c9a962] transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-[#c9a962] font-medium">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-[#f5f0e6]/30 text-sm line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
        {product.isCustomizable && (
          <p className="text-[#f5f0e6]/30 text-[10px] mt-2 tracking-wider">
            CUSTOM FIT AVAILABLE
          </p>
        )}
      </div>
    </div>
  );
}
