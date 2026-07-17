import { Link } from "react-router-dom";
import { WHATSAPP_LINK } from "@/data/products";
import {
  ArrowLeft,
  Scissors,
  Clock,
  Award,
  Users,
  Globe,
  MessageCircle,
} from "lucide-react";

const processSteps = [
  {
    icon: Users,
    title: "Consultation",
    description:
      "Every bespoke journey begins with a one-on-one consultation. We discuss your style, occasion, fabric preferences, and vision. Whether in our Ikeja atelier or via WhatsApp, Klassiq Tunez personally guides the process.",
  },
  {
    icon: Scissors,
    title: "Measurement & Pattern",
    description:
      "Our master tailors take over 30 precise measurements to create your unique paper pattern. For remote clients, we provide a detailed measurement guide and video call support to ensure accuracy.",
  },
  {
    icon: Clock,
    title: "Crafting",
    description:
      "Each garment is hand-cut and stitched by artisans with decades of experience. From canvas insertion to button attachment, every step is executed with obsessive attention to detail over 10-18 business days.",
  },
  {
    icon: Award,
    title: "Quality Control",
    description:
      "Before any piece leaves our atelier, Klassiq Tunez personally inspects every seam, button, and stitch. Only perfection makes it to the garment bag.",
  },
  {
    icon: Globe,
    title: "Delivery",
    description:
      "We ship worldwide. Every garment is carefully pressed, placed in a protective cover, and packaged with care. Your bespoke piece arrives ready to wear.",
  },
];

export default function Atelier() {
  return (
    <div className="pt-20 min-h-screen bg-[#0a1910]">
      {/* Hero */}
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src="/products/klassiq-seated.jpg"
          alt="Klassiq Tunez in his atelier"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0f1f14]/70" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[#f5f0e6]/50 hover:text-[#c9a962] text-sm mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <p className="text-[#c9a962] text-xs tracking-[0.5em] uppercase mb-4">
              Behind the Seams
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl text-[#f5f0e6] mb-4">
              The Atelier
            </h1>
            <p className="text-[#f5f0e6]/60 text-sm sm:text-base max-w-xl mx-auto">
              Where vision meets needle and thread. Welcome to the creative
              heart of Klassiq Kulture in Ikeja, Lagos.
            </p>
          </div>
        </div>
      </div>

      {/* About Klassiq */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <img
                src="/products/klassiq-atelier.jpg"
                alt="Klassiq Tunez with traditional wear"
                className="w-full aspect-[4/5] object-cover border border-[#c9a962]/20"
              />
              <img
                src="/products/klassiq-garment-bags.jpg"
                alt="Suits in garment bags"
                className="w-full aspect-[4/3] object-cover border border-[#c9a962]/20"
              />
            </div>
            <div>
              <p className="text-[#c9a962] text-xs tracking-[0.4em] uppercase mb-4">
                The Founder
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#f5f0e6] mb-6">
                Klassiq <span className="text-[#c9a962]">Tunez</span>
              </h2>
              <div className="space-y-4 text-[#f5f0e6]/60 leading-relaxed">
                <p>
                  Artist. Tailor. Fashion Influencer. Africa's best stylist.
                  With over 115,000 followers on X and a client list that
                  includes Afrobeats royalty, Klassiq Tunez has redefined what
                  luxury menswear means in Nigeria and beyond.
                </p>
                <p>
                  From a small workshop in Ikeja to dressing legends like Tekno,
                  his journey is one of relentless dedication to the craft. Every
                  garment that bears the KK emblem carries his personal guarantee
                  of excellence.
                </p>
                <p>
                  "Fashion is not just what you wear — it's how you carry
                  yourself. I create clothes that make men feel like the best
                  version of themselves." — Klassiq Tunez
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
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
                  @KLASSIQTUNEZ
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-[#25D366]/30 text-[#25D366] text-sm hover:bg-[#25D366]/10 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-20 bg-[#0f1f14] border-y border-[#c9a962]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#c9a962] text-xs tracking-[0.4em] uppercase mb-4">
              How We Work
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#f5f0e6]">
              The Bespoke Process
            </h2>
          </div>

          <div className="space-y-12">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-6 items-start"
              >
                <div className="flex items-center gap-4 md:flex-col md:items-center">
                  <div className="w-16 h-16 rounded-full bg-[#c9a962]/10 border border-[#c9a962]/20 flex items-center justify-center shrink-0">
                    <step.icon className="w-6 h-6 text-[#c9a962]" />
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="hidden md:block w-px h-12 bg-[#c9a962]/20" />
                  )}
                </div>
                <div className="pb-8 md:pb-12">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[#c9a962]/40 text-xs tracking-wider">
                      STEP {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-[#f5f0e6] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#f5f0e6]/50 text-sm leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showroom Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#c9a962] text-xs tracking-[0.4em] uppercase mb-4">
              Our Space
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#f5f0e6]">
              Inside the Showroom
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                img: "/products/showroom-ties.jpg",
                title: "The Colour Wall",
              },
              {
                img: "/products/three-suits-showroom.jpg",
                title: "The Essentials",
              },
              {
                img: "/products/seven-suits.jpg",
                title: "The Full Collection",
              },
              {
                img: "/products/shop-collection.jpg",
                title: "Executive Row",
              },
              {
                img: "/products/suits-collection.jpg",
                title: "The Sovereign Five",
              },
              {
                img: "/products/four-grid-suits.jpg",
                title: "The Check Series",
              },
            ].map((item, i) => (
              <div key={i} className="group relative overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-[#f5f0e6] text-sm font-medium">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0f1f14] border-t border-[#c9a962]/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#f5f0e6] mb-6">
            Begin Your <span className="text-[#c9a962]">Bespoke Journey</span>
          </h2>
          <p className="text-[#f5f0e6]/50 mb-10">
            Whether you're in Lagos or London, Abuja or Atlanta — your perfect
            fit is just a message away.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#25D366] text-white text-sm tracking-[0.15em] uppercase font-semibold hover:bg-[#25D366]/90 transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Order via WhatsApp
            </a>
            <Link
              to="/shop"
              className="px-8 py-4 border border-[#c9a962]/40 text-[#f5f0e6] text-sm tracking-[0.15em] uppercase hover:border-[#c9a962] hover:text-[#c9a962] transition-colors"
            >
              Browse Collection
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
