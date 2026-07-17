import { useState } from "react";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { SlidersHorizontal } from "lucide-react";

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="pt-20 min-h-screen bg-[#0a1910]">
      {/* Header */}
      <div className="bg-[#0f1f14] border-b border-[#c9a962]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <p className="text-[#c9a962] text-xs tracking-[0.4em] uppercase mb-4">
            Collection
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#f5f0e6] mb-4">
            Shop All
          </h1>
          <p className="text-[#f5f0e6]/50 text-sm sm:text-base max-w-xl">
            Discover our curated selection of bespoke garments, each handcrafted
            to embody luxury and heritage.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters & Sort */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs tracking-[0.1em] uppercase border transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#c9a962] text-[#0f1f14] border-[#c9a962]"
                    : "border-[#c9a962]/20 text-[#f5f0e6]/60 hover:border-[#c9a962]/50 hover:text-[#f5f0e6]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">
            <SlidersHorizontal className="w-4 h-4 text-[#c9a962]/50" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#0f1f14] border border-[#c9a962]/20 text-[#f5f0e6]/70 text-xs tracking-wider px-4 py-2 focus:outline-none focus:border-[#c9a962]/50"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name A-Z</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <p className="text-[#f5f0e6]/40 text-xs tracking-wider mb-6">
          Showing {sortedProducts.length}{" "}
          {sortedProducts.length === 1 ? "piece" : "pieces"}
          {activeCategory !== "All" && ` in ${activeCategory}`}
        </p>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty State */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#f5f0e6]/40 text-lg mb-4">
              No pieces found in this category.
            </p>
            <button
              onClick={() => setActiveCategory("All")}
              className="px-6 py-3 bg-[#c9a962] text-[#0f1f14] text-sm tracking-[0.1em] uppercase font-medium hover:bg-[#d4b76a] transition-colors"
            >
              View All Pieces
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
