import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import type { Measurements } from "@/data/products";
import {
  ShoppingBag,
  ArrowLeft,
  ChevronRight,
  Ruler,
  Check,
  Clock,
  Truck,
  Shield,
} from "lucide-react";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === id);

  const [selectedImage, setSelectedImage] = useState(0);
  const [showMeasurements, setShowMeasurements] = useState(false);
  const [measurements, setMeasurements] = useState<Measurements>({});
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="pt-32 min-h-screen bg-[#0a1910] text-center">
        <p className="text-[#f5f0e6]/60 mb-4">Product not found.</p>
        <Link
          to="/shop"
          className="text-[#c9a962] text-sm tracking-wider hover:underline"
        >
          Return to Shop
        </Link>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = () => {
    const finalMeasurements = showMeasurements ? measurements : undefined;
    addToCart(product, finalMeasurements);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const updateMeasurement = (field: keyof Measurements, value: string) => {
    setMeasurements((prev) => ({
      ...prev,
      [field]: field === "notes" ? value : value ? parseFloat(value) : undefined,
    }));
  };

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  return (
    <div className="pt-20 min-h-screen bg-[#0a1910]">
      {/* Breadcrumb */}
      <div className="border-b border-[#c9a962]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/shop"
            className="flex items-center gap-2 text-[#f5f0e6]/50 hover:text-[#c9a962] text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Shop
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Images */}
          <div>
            {/* Main Image */}
            <div className="relative aspect-[3/4] bg-[#0f1f14] border border-[#c9a962]/10 overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#c9a962] text-[#0f1f14] text-[10px] tracking-[0.15em] uppercase font-semibold">
                  {product.badge}
                </div>
              )}
              {discount > 0 && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-red-800/90 text-white text-[10px] tracking-wider font-medium">
                  -{discount}%
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3 mt-4">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-20 h-24 border-2 overflow-hidden transition-colors ${
                      selectedImage === i
                        ? "border-[#c9a962]"
                        : "border-[#c9a962]/20 hover:border-[#c9a962]/50"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <p className="text-[#c9a962]/60 text-xs tracking-[0.3em] uppercase mb-3">
              {product.category}
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#f5f0e6] mb-4">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-[#c9a962] text-2xl font-medium">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-[#f5f0e6]/30 text-lg line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            <p className="text-[#f5f0e6]/60 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Details */}
            <div className="grid grid-cols-2 gap-4 mb-8 p-6 bg-[#0f1f14] border border-[#c9a962]/10">
              <div>
                <p className="text-[#c9a962]/60 text-[10px] tracking-[0.2em] uppercase mb-1">
                  Material
                </p>
                <p className="text-[#f5f0e6]/80 text-sm">
                  {product.details.material}
                </p>
              </div>
              <div>
                <p className="text-[#c9a962]/60 text-[10px] tracking-[0.2em] uppercase mb-1">
                  Fit
                </p>
                <p className="text-[#f5f0e6]/80 text-sm">
                  {product.details.fit}
                </p>
              </div>
              <div>
                <p className="text-[#c9a962]/60 text-[10px] tracking-[0.2em] uppercase mb-1">
                  Care
                </p>
                <p className="text-[#f5f0e6]/80 text-sm">
                  {product.details.care}
                </p>
              </div>
              <div>
                <p className="text-[#c9a962]/60 text-[10px] tracking-[0.2em] uppercase mb-1">
                  Turnaround
                </p>
                <p className="text-[#f5f0e6]/80 text-sm">
                  {product.details.turnaround}
                </p>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-[#f5f0e6]/40 text-xs">
                <Clock className="w-4 h-4 text-[#c9a962]/40" />
                Made to Order
              </div>
              <div className="flex items-center gap-2 text-[#f5f0e6]/40 text-xs">
                <Truck className="w-4 h-4 text-[#c9a962]/40" />
                Worldwide Shipping
              </div>
              <div className="flex items-center gap-2 text-[#f5f0e6]/40 text-xs">
                <Shield className="w-4 h-4 text-[#c9a962]/40" />
                Quality Guaranteed
              </div>
            </div>

            {/* Custom Measurements Toggle */}
            {product.isCustomizable && (
              <div className="mb-6">
                <button
                  onClick={() => setShowMeasurements(!showMeasurements)}
                  className={`flex items-center gap-3 w-full p-4 border transition-colors ${
                    showMeasurements
                      ? "border-[#c9a962] bg-[#c9a962]/5"
                      : "border-[#c9a962]/20 hover:border-[#c9a962]/40"
                  }`}
                >
                  <Ruler
                    className={`w-5 h-5 ${
                      showMeasurements ? "text-[#c9a962]" : "text-[#f5f0e6]/40"
                    }`}
                  />
                  <div className="text-left">
                    <p
                      className={`text-sm font-medium ${
                        showMeasurements
                          ? "text-[#c9a962]"
                          : "text-[#f5f0e6]/70"
                      }`}
                    >
                      Custom Measurements
                    </p>
                    <p className="text-[#f5f0e6]/40 text-xs">
                      Provide your measurements for a perfect bespoke fit
                    </p>
                  </div>
                  {showMeasurements ? (
                    <Check className="w-4 h-4 text-[#c9a962] ml-auto" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-[#f5f0e6]/30 ml-auto" />
                  )}
                </button>

                {/* Measurement Form */}
                {showMeasurements && (
                  <div className="p-6 border border-t-0 border-[#c9a962]/20 bg-[#0f1f14]/50">
                    <p className="text-[#c9a962]/80 text-xs tracking-wider mb-4">
                      All measurements in inches
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { key: "chest", label: "Chest" },
                        { key: "waist", label: "Waist" },
                        { key: "hips", label: "Hips" },
                        { key: "shoulder", label: "Shoulder Width" },
                        { key: "sleeve", label: "Sleeve Length" },
                        { key: "length", label: "Garment Length" },
                        { key: "neck", label: "Neck" },
                        { key: "inseam", label: "Inseam" },
                      ].map(({ key, label }) => (
                        <div key={key}>
                          <label className="text-[#f5f0e6]/50 text-[10px] tracking-wider uppercase mb-1 block">
                            {label}
                          </label>
                          <input
                            type="number"
                            step="0.5"
                            placeholder="0.0"
                            value={measurements[key as keyof Measurements] || ""}
                            onChange={(e) =>
                              updateMeasurement(
                                key as keyof Measurements,
                                e.target.value
                              )
                            }
                            className="w-full px-3 py-2 bg-[#0a1910] border border-[#c9a962]/20 text-[#f5f0e6] text-sm placeholder:text-[#f5f0e6]/20 focus:outline-none focus:border-[#c9a962]/50"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="mt-4">
                      <label className="text-[#f5f0e6]/50 text-[10px] tracking-wider uppercase mb-1 block">
                        Special Requests / Notes
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Any specific preferences or requests..."
                        value={measurements.notes || ""}
                        onChange={(e) =>
                          updateMeasurement("notes", e.target.value)
                        }
                        className="w-full px-3 py-2 bg-[#0a1910] border border-[#c9a962]/20 text-[#f5f0e6] text-sm placeholder:text-[#f5f0e6]/20 focus:outline-none focus:border-[#c9a962]/50 resize-none"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 flex items-center justify-center gap-3 text-sm tracking-[0.15em] uppercase font-semibold transition-all duration-300 ${
                addedToCart
                  ? "bg-green-700 text-white"
                  : "bg-[#c9a962] text-[#0f1f14] hover:bg-[#d4b76a]"
              }`}
            >
              {addedToCart ? (
                <>
                  <Check className="w-5 h-5" />
                  Added to Cart
                </>
              ) : (
                <>
                  <ShoppingBag className="w-5 h-5" />
                  Add to Cart — {formatPrice(product.price)}
                </>
              )}
            </button>

            <p className="text-center text-[#f5f0e6]/30 text-xs mt-4">
              Free shipping on orders over {formatPrice(200000)}
            </p>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20 pt-16 border-t border-[#c9a962]/10">
          <h2 className="font-serif text-2xl text-[#f5f0e6] mb-8">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter((p) => p.id !== product.id && p.category === product.category)
              .slice(0, 4)
              .map((p) => (
                <div key={p.id} className="group">
                  <Link to={`/product/${p.id}`}>
                    <div className="aspect-[3/4] overflow-hidden border border-[#c9a962]/10 mb-3">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <p className="text-[#c9a962]/60 text-[10px] tracking-[0.2em] uppercase">
                      {p.category}
                    </p>
                    <p className="text-[#f5f0e6] text-sm group-hover:text-[#c9a962] transition-colors">
                      {p.name}
                    </p>
                    <p className="text-[#c9a962] text-sm mt-1">
                      {formatPrice(p.price)}
                    </p>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
