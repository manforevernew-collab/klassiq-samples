import { Link } from "react-router-dom";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import {
  ArrowRight,
  Scissors,
  Clock,
  Truck,
  Award,
  Star,
} from "lucide-react";


export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/hero-banner.jpg"
            alt="Luxury tailoring"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0f1f14]/75" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-[#c9a962] text-xs sm:text-sm tracking-[0.4em] uppercase mb-6">
            Bespoke Luxury Fashion
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl text-[#f5f0e6] leading-[1.1] mb-6">
            Express Your
            <br />
            <span className="text-[#c9a962]">Fashion Sense</span>
          </h1>
          <p className="text-[#f5f0e6]/60 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            We provide a curated blend of luxury fashion and lifestyle
            experiences, designed to reflect individuality, elegance, and
            culture.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/shop"
              className="px-8 py-4 bg-[#c9a962] text-[#0f1f14] text-sm tracking-[0.15em] uppercase font-semibold hover:bg-[#d4b76a] transition-colors duration-300"
            >
              Shop Collection
            </Link>
            <a
              href="#about"
              className="px-8 py-4 border border-[#c9a962]/40 text-[#f5f0e6] text-sm tracking-[0.15em] uppercase hover:border-[#c9a962] hover:text-[#c9a962] transition-colors duration-300"
            >
              Our Story
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[#f5f0e6]/40 text-[10px] tracking-[0.3em] uppercase">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-[#c9a962]/50 to-transparent" />
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-[#0f1f14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#c9a962] text-xs tracking-[0.4em] uppercase mb-4">
              Browse By
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#f5f0e6]">
              Our Collections
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {categories.map((cat) => (
              <Link
                key={cat}
                to="/shop"
                className="px-6 sm:px-8 py-3 border border-[#c9a962]/20 text-[#f5f0e6]/70 text-xs sm:text-sm tracking-[0.15em] uppercase hover:border-[#c9a962] hover:text-[#c9a962] hover:bg-[#c9a962]/5 transition-all duration-300"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-[#0a1910]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-[#c9a962] text-xs tracking-[0.4em] uppercase mb-4">
                Curated For You
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#f5f0e6]">
                Featured Pieces
              </h2>
            </div>
            <Link
              to="/shop"
              className="flex items-center gap-2 text-[#c9a962] text-sm tracking-[0.1em] uppercase hover:text-[#d4b76a] transition-colors"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Fitting CTA */}
      <section className="py-24 bg-[#0f1f14] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/products/suits-collection.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Scissors className="w-10 h-10 text-[#c9a962] mx-auto mb-6" />
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#f5f0e6] mb-6">
            The Art of Custom Tailoring
          </h2>
          <p className="text-[#f5f0e6]/60 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Every garment is handcrafted to your exact measurements. Provide your
            details during checkout and our master tailors will create a piece
            that fits you perfectly — like a second skin.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#c9a962]/60" />
              <span className="text-[#f5f0e6]/60 text-sm">
                10-18 Business Days
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Truck className="w-5 h-5 text-[#c9a962]/60" />
              <span className="text-[#f5f0e6]/60 text-sm">
                Worldwide Shipping
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-[#c9a962]/60" />
              <span className="text-[#f5f0e6]/60 text-sm">
                Premium Materials
              </span>
            </div>
          </div>
          <Link
            to="/shop"
            className="px-10 py-4 bg-[#c9a962] text-[#0f1f14] text-sm tracking-[0.15em] uppercase font-semibold hover:bg-[#d4b76a] transition-colors"
          >
            Start Your Order
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#0a1910]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/products/green-agbada.jpg"
                alt="Klassiq Kulture craftsmanship"
                className="w-full aspect-[4/5] object-cover border border-[#c9a962]/20"
              />
            </div>
            <div>
              <p className="text-[#c9a962] text-xs tracking-[0.4em] uppercase mb-4">
                Our Story
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#f5f0e6] mb-6">
                Where Heritage Meets
                <span className="text-[#c9a962]"> High Fashion</span>
              </h2>
              <div className="space-y-4 text-[#f5f0e6]/60 leading-relaxed">
                <p>
                  Founded by Klassiq Tunez — celebrated stylist, tailor, and
                  fashion influencer with over 115,000 followers — Klassiq
                  Kulture represents the pinnacle of African luxury menswear.
                </p>
                <p>
                  Each piece in our collection is born from a deep respect for
                  traditional craftsmanship, merged with contemporary design
                  sensibilities. From bespoke suits that rival Savile Row to
n                  royal Agbadas adorned with hand-stitched gold embroidery, we
create garments that tell a story.
                </p>
                <p>
                  Our atelier in Ikeja, Lagos is where heritage techniques meet
                  modern innovation. Every stitch, every seam, every detail is
                  executed with precision by master artisans who have honed their
                  craft over decades.
                </p>
              </div>
              <div className="flex items-center gap-4 mt-8">
                <a
                  href="https://x.com/KLASSIQTUNEZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-[#c9a962]/30 text-[#f5f0e6]/70 text-sm hover:border-[#c9a962] hover:text-[#c9a962] transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  Follow on X
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#0f1f14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#c9a962] text-xs tracking-[0.4em] uppercase mb-4">
              Clientele
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#f5f0e6]">
              Dressed for Greatness
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Tekno",
                role: "Afrobeats Legend",
                text: "Klassiq Kulture dressed me for one of my most important appearances. The green Agbada was a masterpiece — every eye was on me. True luxury.",
                rating: 5,
              },
              {
                name: "Chinedu O.",
                role: "Business Executive",
                text: "The bespoke suit I ordered fit like nothing I've ever worn. The attention to detail is remarkable. This is how luxury should feel.",
                rating: 5,
              },
              {
                name: "Adebayo T.",
                role: "Creative Director",
                text: "I've been wearing Klassiq Kulture for years. The consistency in quality, the personal service, the sheer elegance — unmatched in Lagos.",
                rating: 5,
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="p-8 border border-[#c9a962]/10 hover:border-[#c9a962]/30 transition-colors"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-[#c9a962] text-[#c9a962]"
                    />
                  ))}
                </div>
                <p className="text-[#f5f0e6]/70 text-sm leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="text-[#f5f0e6] text-sm font-medium">
                    {testimonial.name}
                  </p>
                  <p className="text-[#c9a962]/60 text-xs tracking-wider">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#0a1910] border-y border-[#c9a962]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10,000+", label: "Garments Crafted" },
              { value: "115K+", label: "Social Followers" },
              { value: "50+", label: "Celebrities Dressed" },
              { value: "100%", label: "Handmade" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl sm:text-4xl text-[#c9a962] mb-2">
                  {stat.value}
                </p>
                <p className="text-[#f5f0e6]/50 text-xs tracking-[0.15em] uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
