import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

const lookbookProducts = products.filter((p) =>
  [
    "1",
    "2",
    "4",
    "5",
    "6",
    "10",
    "12",
    "14",
    "16",
    "18",
    "20",
    "21",
  ].includes(p.id)
);

export default function Lookbook() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const next = () =>
    setLightbox((prev) =>
      prev !== null ? (prev + 1) % lookbookProducts.length : null
    );
  const prev = () =>
    setLightbox((prev) =>
      prev !== null
        ? (prev - 1 + lookbookProducts.length) % lookbookProducts.length
        : null
    );

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="pt-20 min-h-screen bg-[#0a1910]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#f5f0e6]/50 hover:text-[#c9a962] text-sm mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        <p className="text-[#c9a962] text-xs tracking-[0.5em] uppercase mb-4">
          Klassiq Kulture
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl text-[#f5f0e6] mb-4">
          Lookbook
        </h1>
        <p className="text-[#f5f0e6]/50 text-sm sm:text-base max-w-lg mx-auto">
          An editorial curation of our finest pieces. Click any image to explore.
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {lookbookProducts.map((product, i) => (
            <div
              key={product.id}
              className="break-inside-avoid group cursor-pointer relative overflow-hidden"
              onClick={() => openLightbox(i)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4 text-center">
                <p className="text-[#c9a962] text-[10px] tracking-[0.3em] uppercase mb-2">
                  {product.category}
                </p>
                <h3 className="font-serif text-xl text-[#f5f0e6] mb-1">
                  {product.name}
                </h3>
                <p className="text-[#c9a962] text-sm font-medium">
                  {formatPrice(product.price)}
                </p>
              </div>
              {product.badge && (
                <div className="absolute top-3 left-3 px-2 py-0.5 bg-[#c9a962] text-[#0f1f14] text-[9px] tracking-wider uppercase font-semibold">
                  {product.badge}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[70] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-[#f5f0e6]/60 hover:text-white transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 sm:left-8 text-[#f5f0e6]/60 hover:text-white transition-colors z-10"
          >
            <ArrowLeft className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 sm:right-8 text-[#f5f0e6]/60 hover:text-white transition-colors z-10"
          >
            <ArrowRight className="w-8 h-8" />
          </button>

          <div
            className="max-w-4xl max-h-[85vh] px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lookbookProducts[lightbox].image}
              alt={lookbookProducts[lightbox].name}
              className="max-w-full max-h-[70vh] object-contain mx-auto"
            />
            <div className="text-center mt-4">
              <p className="text-[#c9a962] text-[10px] tracking-[0.3em] uppercase mb-1">
                {lookbookProducts[lightbox].category}
              </p>
              <h3 className="font-serif text-2xl text-[#f5f0e6]">
                {lookbookProducts[lightbox].name}
              </h3>
              <p className="text-[#c9a962] text-lg mt-1">
                {formatPrice(lookbookProducts[lightbox].price)}
              </p>
              <Link
                to={`/product/${lookbookProducts[lightbox].id}`}
                onClick={closeLightbox}
                className="inline-block mt-4 px-6 py-2 border border-[#c9a962]/40 text-[#f5f0e6] text-xs tracking-[0.15em] uppercase hover:border-[#c9a962] hover:text-[#c9a962] transition-colors"
              >
                View Product
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
