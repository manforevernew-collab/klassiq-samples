import { Link } from "react-router-dom";
import { WHATSAPP_LINK } from "@/data/products";
import { Phone, MapPin, Mail, Ruler, ArrowUp, MessageCircle } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-[#0a1910] border-t border-[#c9a962]/20">
      {/* Newsletter */}
      <div className="border-b border-[#c9a962]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-[#c9a962] font-serif text-xl tracking-[0.1em]">
                Join the Inner Circle
              </h3>
              <p className="text-[#f5f0e6]/50 text-sm mt-2">
                Exclusive access to new collections, private events, and bespoke
                services.
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for subscribing!");
              }}
              className="flex w-full md:w-auto"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 md:w-72 px-4 py-3 bg-[#0f1f14] border border-[#c9a962]/30 text-[#f5f0e6] text-sm placeholder:text-[#f5f0e6]/30 focus:outline-none focus:border-[#c9a962] transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#c9a962] text-[#0f1f14] text-sm tracking-[0.1em] uppercase font-semibold hover:bg-[#d4b76a] transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img
                src="/logo.png"
                alt="Klassiq Kulture"
                className="h-12 w-12 rounded-full object-cover border border-[#c9a962]/30"
              />
              <span className="text-[#c9a962] font-serif text-lg tracking-[0.15em] uppercase">
                Klassiq Kulture
              </span>
            </Link>
            <p className="text-[#f5f0e6]/50 text-sm leading-relaxed">
              Bespoke luxury fashion rooted in African heritage. Each garment is
              handcrafted by master artisans to reflect individuality, elegance,
              and culture.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#c9a962] text-sm tracking-[0.15em] uppercase mb-6">
              Explore
            </h4>
            <ul className="space-y-3">
              {["Shop All", "Jackets", "Bespoke Suits", "Royal Agbada"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      to="/shop"
                      className="text-[#f5f0e6]/50 hover:text-[#c9a962] text-sm transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#c9a962] text-sm tracking-[0.15em] uppercase mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Ruler className="w-4 h-4 text-[#c9a962]/50" />
                <span className="text-[#f5f0e6]/50 text-sm">
                  Custom Measurements
                </span>
              </li>
              <li className="text-[#f5f0e6]/50 text-sm">
                Bespoke Tailoring
              </li>
              <li className="text-[#f5f0e6]/50 text-sm">
                Style Consultation
              </li>
              <li className="text-[#f5f0e6]/50 text-sm">
                Worldwide Shipping
              </li>
              <li className="text-[#f5f0e6]/50 text-sm">
                Alterations & Repairs
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#c9a962] text-sm tracking-[0.15em] uppercase mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#c9a962]/50 mt-0.5 shrink-0" />
                <span className="text-[#f5f0e6]/50 text-sm">
                  +234 810 009 0284
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#c9a962]/50 mt-0.5 shrink-0" />
                <span className="text-[#f5f0e6]/50 text-sm">
                  Ikeja, Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#c9a962]/50 mt-0.5 shrink-0" />
                <span className="text-[#f5f0e6]/50 text-sm">
                  fashionetmusic@outlook.com
                </span>
              </li>
              <li className="pt-2">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-[#25D366]/30 text-[#25D366] text-sm hover:bg-[#25D366]/10 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/KLASSIQTUNEZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-[#c9a962]/30 text-[#f5f0e6]/70 text-sm hover:border-[#c9a962] hover:text-[#c9a962] transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  Follow @KLASSIQTUNEZ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#c9a962]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#f5f0e6]/30 text-xs tracking-wide text-center sm:text-left">
            &copy; {new Date().getFullYear()} Klassiq Kulture. All rights
            reserved. Crafted with excellence in Lagos.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#c9a962]/50 hover:text-[#c9a962] text-xs tracking-wider transition-colors"
          >
            Back to Top
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
