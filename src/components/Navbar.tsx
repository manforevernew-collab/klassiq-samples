import { Link, useLocation } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { WHATSAPP_LINK } from "@/data/products";
import { ShoppingBag, Menu, X, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/#about" },
    { name: "Contact", path: "/#contact" },
  ];

  const scrollToSection = (path: string) => {
    if (path.startsWith("/#")) {
      const id = path.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f1f14]/95 backdrop-blur-md border-b border-[#c9a962]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Klassiq Kulture"
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover border border-[#c9a962]/30"
            />
            <span className="text-[#c9a962] font-serif text-lg sm:text-xl tracking-[0.2em] uppercase font-medium hidden sm:block">
              Klassiq Kulture
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.path.startsWith("/#") ? (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.path)}
                  className="text-[#f5f0e6]/80 hover:text-[#c9a962] text-sm tracking-[0.15em] uppercase transition-colors duration-300"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm tracking-[0.15em] uppercase transition-colors duration-300 ${
                    location.pathname === link.path
                      ? "text-[#c9a962]"
                      : "text-[#f5f0e6]/80 hover:text-[#c9a962]"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 text-[#25D366] hover:text-[#25D366]/80 transition-colors duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-xs tracking-wider">WhatsApp</span>
            </a>

            <a
              href="https://x.com/KLASSIQTUNEZ"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 text-[#f5f0e6]/70 hover:text-[#c9a962] transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span className="text-xs tracking-wider">@KLASSIQTUNEZ</span>
            </a>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-[#f5f0e6]/80 hover:text-[#c9a962] transition-colors duration-300"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#c9a962] text-[#0f1f14] text-[10px] font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#f5f0e6]/80 hover:text-[#c9a962] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0f1f14]/98 border-t border-[#c9a962]/20">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) =>
              link.path.startsWith("/#") ? (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.path)}
                  className="block text-[#f5f0e6]/80 hover:text-[#c9a962] text-sm tracking-[0.15em] uppercase transition-colors"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-sm tracking-[0.15em] uppercase transition-colors ${
                    location.pathname === link.path
                      ? "text-[#c9a962]"
                      : "text-[#f5f0e6]/80 hover:text-[#c9a962]"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#25D366] hover:text-[#25D366]/80 transition-colors pt-4 border-t border-[#c9a962]/10"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-xs tracking-wider">Chat on WhatsApp</span>
            </a>
            <a
              href="https://x.com/KLASSIQTUNEZ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#f5f0e6]/70 hover:text-[#c9a962] transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span className="text-xs tracking-wider">@KLASSIQTUNEZ</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
