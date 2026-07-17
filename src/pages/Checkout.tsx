import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { WHATSAPP_LINK } from "@/data/products";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  CreditCard,
  User,
  MapPin,
  Phone,
  Check,
  Ruler,
  AlertCircle,
} from "lucide-react";

export default function Checkout() {
  const { items, totalPrice, clearCart } = useCart();
  // Navigation handled via Link components
  const [step, setStep] = useState<"details" | "review" | "success">("details");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "Nigeria",
    postalCode: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const shippingCost = totalPrice > 200000 ? 0 : 5000;
  const total = totalPrice + shippingCost;

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = "Required";
    if (!formData.lastName.trim()) newErrors.lastName = "Required";
    if (!formData.email.trim()) newErrors.email = "Required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email";
    if (!formData.phone.trim()) newErrors.phone = "Required";
    if (!formData.address.trim()) newErrors.address = "Required";
    if (!formData.city.trim()) newErrors.city = "Required";
    if (!formData.state.trim()) newErrors.state = "Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (validateForm()) {
      setStep("review");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePlaceOrder = () => {
    setStep("success");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  if (items.length === 0 && step !== "success") {
    return (
      <div className="pt-32 min-h-screen bg-[#0a1910] flex items-center justify-center">
        <div className="text-center max-w-md px-4">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#c9a962]/10 flex items-center justify-center">
            <CreditCard className="w-8 h-8 text-[#c9a962]/40" />
          </div>
          <h2 className="font-serif text-2xl text-[#f5f0e6] mb-3">
            Your Cart is Empty
          </h2>
          <p className="text-[#f5f0e6]/50 text-sm mb-8">
            Before you can proceed to checkout, you must add some products to
            your cart. You will find a lot of interesting pieces in our shop.
          </p>
          <Link
            to="/shop"
            className="inline-block px-8 py-3 bg-[#c9a962] text-[#0f1f14] text-sm tracking-[0.15em] uppercase font-semibold hover:bg-[#d4b76a] transition-colors"
          >
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  if (step === "success") {
    return (
      <div className="pt-32 min-h-screen bg-[#0a1910] flex items-center justify-center">
        <div className="text-center max-w-lg px-4">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-900/30 flex items-center justify-center">
            <Check className="w-10 h-10 text-green-400" />
          </div>
          <h2 className="font-serif text-3xl text-[#f5f0e6] mb-4">
            Order Confirmed
          </h2>
          <p className="text-[#f5f0e6]/60 mb-2">
            Thank you for your order,{" "}
            <span className="text-[#c9a962]">{formData.firstName}</span>.
          </p>
          <p className="text-[#f5f0e6]/50 text-sm mb-8">
            We have received your order and will begin crafting your bespoke
            garment immediately. You will receive a confirmation email at{" "}
            {formData.email} with your order details and estimated delivery
            timeline.
          </p>
          <div className="p-6 bg-[#0f1f14] border border-[#c9a962]/10 mb-8 text-left">
            <p className="text-[#c9a962] text-xs tracking-[0.2em] uppercase mb-4">
              What happens next?
            </p>
            <ul className="space-y-3">
              {[
                "Our team will review your measurements and preferences",
                "A tailor will be assigned to your garment within 24 hours",
                "You will receive progress updates via email/WhatsApp",
                "Your piece will be carefully packaged and shipped",
              ].map((step, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[#f5f0e6]/60 text-sm"
                >
                  <span className="w-5 h-5 rounded-full bg-[#c9a962]/20 flex items-center justify-center text-[#c9a962] text-xs shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ul>
          </div>
          <Link
            to="/"
            onClick={() => clearCart()}
            className="inline-block px-8 py-3 bg-[#c9a962] text-[#0f1f14] text-sm tracking-[0.15em] uppercase font-semibold hover:bg-[#d4b76a] transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-[#0a1910]">
      {/* Header */}
      <div className="bg-[#0f1f14] border-b border-[#c9a962]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            to="/shop"
            className="flex items-center gap-2 text-[#f5f0e6]/50 hover:text-[#c9a962] text-sm transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Continue Shopping
          </Link>
          <h1 className="font-serif text-2xl sm:text-3xl text-[#f5f0e6]">
            Checkout
          </h1>
        </div>
      </div>

      {/* Progress */}
      <div className="border-b border-[#c9a962]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <div
              className={`flex items-center gap-2 ${
                step === "details" ? "text-[#c9a962]" : "text-green-400"
              }`}
            >
              {step === "details" ? (
                <div className="w-6 h-6 rounded-full bg-[#c9a962] text-[#0f1f14] flex items-center justify-center text-xs font-bold">
                  1
                </div>
              ) : (
                <Check className="w-5 h-5" />
              )}
              <span className="text-xs tracking-wider uppercase hidden sm:inline">
                Details
              </span>
            </div>
            <div className="flex-1 h-px bg-[#c9a962]/20" />
            <div
              className={`flex items-center gap-2 ${
                step === "review" ? "text-[#c9a962]" : "text-[#f5f0e6]/30"
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  step === "review"
                    ? "bg-[#c9a962] text-[#0f1f14]"
                    : "bg-[#c9a962]/20 text-[#f5f0e6]/40"
                }`}
              >
                2
              </div>
              <span className="text-xs tracking-wider uppercase hidden sm:inline">
                Review
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Form */}
          <div className="lg:col-span-2">
            {step === "details" ? (
              <div className="space-y-8">
                {/* Contact */}
                <div>
                  <h2 className="text-[#c9a962] text-sm tracking-[0.15em] uppercase mb-4 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Contact Information
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[#f5f0e6]/50 text-[10px] tracking-wider uppercase mb-1 block">
                        First Name *
                      </label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) =>
                          updateField("firstName", e.target.value)
                        }
                        className={`w-full px-4 py-3 bg-[#0f1f14] border text-[#f5f0e6] text-sm focus:outline-none transition-colors ${
                          errors.firstName
                            ? "border-red-500"
                            : "border-[#c9a962]/20 focus:border-[#c9a962]/50"
                        }`}
                      />
                      {errors.firstName && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.firstName}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="text-[#f5f0e6]/50 text-[10px] tracking-wider uppercase mb-1 block">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) =>
                          updateField("lastName", e.target.value)
                        }
                        className={`w-full px-4 py-3 bg-[#0f1f14] border text-[#f5f0e6] text-sm focus:outline-none transition-colors ${
                          errors.lastName
                            ? "border-red-500"
                            : "border-[#c9a962]/20 focus:border-[#c9a962]/50"
                        }`}
                      />
                      {errors.lastName && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="text-[#f5f0e6]/50 text-[10px] tracking-wider uppercase mb-1 block">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        className={`w-full px-4 py-3 bg-[#0f1f14] border text-[#f5f0e6] text-sm focus:outline-none transition-colors ${
                          errors.email
                            ? "border-red-500"
                            : "border-[#c9a962]/20 focus:border-[#c9a962]/50"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="text-[#f5f0e6]/50 text-[10px] tracking-wider uppercase mb-1 block">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        className={`w-full px-4 py-3 bg-[#0f1f14] border text-[#f5f0e6] text-sm focus:outline-none transition-colors ${
                          errors.phone
                            ? "border-red-500"
                            : "border-[#c9a962]/20 focus:border-[#c9a962]/50"
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Shipping */}
                <div>
                  <h2 className="text-[#c9a962] text-sm tracking-[0.15em] uppercase mb-4 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Shipping Address
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="text-[#f5f0e6]/50 text-[10px] tracking-wider uppercase mb-1 block">
                        Street Address *
                      </label>
                      <input
                        type="text"
                        value={formData.address}
                        onChange={(e) =>
                          updateField("address", e.target.value)
                        }
                        className={`w-full px-4 py-3 bg-[#0f1f14] border text-[#f5f0e6] text-sm focus:outline-none transition-colors ${
                          errors.address
                            ? "border-red-500"
                            : "border-[#c9a962]/20 focus:border-[#c9a962]/50"
                        }`}
                      />
                      {errors.address && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.address}
                        </p>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-[#f5f0e6]/50 text-[10px] tracking-wider uppercase mb-1 block">
                          City *
                        </label>
                        <input
                          type="text"
                          value={formData.city}
                          onChange={(e) =>
                            updateField("city", e.target.value)
                          }
                          className={`w-full px-4 py-3 bg-[#0f1f14] border text-[#f5f0e6] text-sm focus:outline-none transition-colors ${
                            errors.city
                              ? "border-red-500"
                              : "border-[#c9a962]/20 focus:border-[#c9a962]/50"
                          }`}
                        />
                        {errors.city && (
                          <p className="text-red-400 text-xs mt-1">
                            {errors.city}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="text-[#f5f0e6]/50 text-[10px] tracking-wider uppercase mb-1 block">
                          State / Province *
                        </label>
                        <input
                          type="text"
                          value={formData.state}
                          onChange={(e) =>
                            updateField("state", e.target.value)
                          }
                          className={`w-full px-4 py-3 bg-[#0f1f14] border text-[#f5f0e6] text-sm focus:outline-none transition-colors ${
                            errors.state
                              ? "border-red-500"
                              : "border-[#c9a962]/20 focus:border-[#c9a962]/50"
                          }`}
                        />
                        {errors.state && (
                          <p className="text-red-400 text-xs mt-1">
                            {errors.state}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-[#f5f0e6]/50 text-[10px] tracking-wider uppercase mb-1 block">
                          Country
                        </label>
                        <input
                          type="text"
                          value={formData.country}
                          onChange={(e) =>
                            updateField("country", e.target.value)
                          }
                          className="w-full px-4 py-3 bg-[#0f1f14] border border-[#c9a962]/20 text-[#f5f0e6] text-sm focus:outline-none focus:border-[#c9a962]/50"
                        />
                      </div>
                      <div>
                        <label className="text-[#f5f0e6]/50 text-[10px] tracking-wider uppercase mb-1 block">
                          Postal Code
                        </label>
                        <input
                          type="text"
                          value={formData.postalCode}
                          onChange={(e) =>
                            updateField("postalCode", e.target.value)
                          }
                          className="w-full px-4 py-3 bg-[#0f1f14] border border-[#c9a962]/20 text-[#f5f0e6] text-sm focus:outline-none focus:border-[#c9a962]/50"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <h2 className="text-[#c9a962] text-sm tracking-[0.15em] uppercase mb-4">
                    Order Notes
                  </h2>
                  <textarea
                    rows={3}
                    placeholder="Any special delivery instructions or requests..."
                    value={formData.notes}
                    onChange={(e) => updateField("notes", e.target.value)}
                    className="w-full px-4 py-3 bg-[#0f1f14] border border-[#c9a962]/20 text-[#f5f0e6] text-sm placeholder:text-[#f5f0e6]/20 focus:outline-none focus:border-[#c9a962]/50 resize-none"
                  />
                </div>

                <button
                  onClick={handleContinue}
                  className="w-full py-4 bg-[#c9a962] text-[#0f1f14] text-sm tracking-[0.15em] uppercase font-semibold hover:bg-[#d4b76a] transition-colors"
                >
                  Review Order
                </button>
              </div>
            ) : (
              /* Review Step */
              <div className="space-y-8">
                <h2 className="text-[#c9a962] text-sm tracking-[0.15em] uppercase flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  Review Your Order
                </h2>

                {/* Items */}
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 p-4 bg-[#0f1f14] border border-[#c9a962]/10"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-20 object-cover border border-[#c9a962]/20"
                      />
                      <div className="flex-1">
                        <h3 className="text-[#f5f0e6] text-sm font-medium">
                          {item.name}
                        </h3>
                        <p className="text-[#c9a962]/60 text-xs mt-1">
                          {item.category}
                        </p>
                        <p className="text-[#c9a962] text-sm mt-1">
                          {formatPrice(item.price)} x {item.quantity}
                        </p>
                        {item.measurements &&
                          Object.values(item.measurements).some(
                            (v) => v !== undefined && v !== ""
                          ) && (
                            <div className="mt-2 p-2 bg-[#c9a962]/5 border border-[#c9a962]/10">
                              <p className="text-[#c9a962]/70 text-[10px] tracking-wider uppercase mb-1 flex items-center gap-1">
                                <Ruler className="w-3 h-3" />
                                Custom Measurements
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {Object.entries(item.measurements)
                                  .filter(
                                    ([_, v]) =>
                                      v !== undefined && v !== "" && v !== 0
                                  )
                                  .map(([k, v]) => (
                                    <span
                                      key={k}
                                      className="text-[#f5f0e6]/50 text-[10px]"
                                    >
                                      {k}: {v}"
                                    </span>
                                  ))}
                              </div>
                            </div>
                          )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Shipping Details */}
                <div className="p-4 bg-[#0f1f14] border border-[#c9a962]/10">
                  <h3 className="text-[#f5f0e6] text-sm font-medium mb-3">
                    Shipping To:
                  </h3>
                  <p className="text-[#f5f0e6]/60 text-sm">
                    {formData.firstName} {formData.lastName}
                  </p>
                  <p className="text-[#f5f0e6]/60 text-sm">
                    {formData.address}
                  </p>
                  <p className="text-[#f5f0e6]/60 text-sm">
                    {formData.city}, {formData.state}
                  </p>
                  <p className="text-[#f5f0e6]/60 text-sm">
                    {formData.country} {formData.postalCode}
                  </p>
                  <p className="text-[#f5f0e6]/60 text-sm mt-2">
                    {formData.email}
                  </p>
                  <p className="text-[#f5f0e6]/60 text-sm">{formData.phone}</p>
                </div>

                {/* Payment Note */}
                <div className="p-4 bg-[#0f1f14] border border-[#c9a962]/10">
                  <div className="flex items-start gap-3">
                    <CreditCard className="w-5 h-5 text-[#c9a962]/50 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[#f5f0e6]/70 text-sm font-medium">
                        Payment on Delivery
                      </p>
                      <p className="text-[#f5f0e6]/40 text-xs mt-1">
                        Pay securely when your order arrives. Our team will
                        contact you to confirm delivery details before
                        dispatch.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setStep("details")}
                    className="flex-1 py-4 border border-[#c9a962]/30 text-[#f5f0e6]/70 text-sm tracking-[0.15em] uppercase hover:border-[#c9a962] hover:text-[#c9a962] transition-colors"
                  >
                    Edit Details
                  </button>
                  <button
                    onClick={handlePlaceOrder}
                    className="flex-1 py-4 bg-[#c9a962] text-[#0f1f14] text-sm tracking-[0.15em] uppercase font-semibold hover:bg-[#d4b76a] transition-colors"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div>
            <div className="sticky top-24 bg-[#0f1f14] border border-[#c9a962]/10 p-6">
              <h2 className="text-[#c9a962] text-sm tracking-[0.15em] uppercase mb-6">
                Order Summary
              </h2>

              <div className="space-y-3 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-[#f5f0e6]/60">
                      {item.name} x {item.quantity}
                    </span>
                    <span className="text-[#f5f0e6]/80">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#c9a962]/10 pt-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-[#f5f0e6]/50">Subtotal</span>
                  <span className="text-[#f5f0e6]/80">
                    {formatPrice(totalPrice)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#f5f0e6]/50">Shipping</span>
                  <span
                    className={
                      shippingCost === 0 ? "text-green-400" : "text-[#f5f0e6]/80"
                    }
                  >
                    {shippingCost === 0 ? "FREE" : formatPrice(shippingCost)}
                  </span>
                </div>
                {shippingCost === 0 && (
                  <p className="text-green-400/60 text-[10px]">
                    You qualified for free shipping!
                  </p>
                )}
              </div>

              <div className="border-t border-[#c9a962]/10 pt-4 mt-4">
                <div className="flex justify-between">
                  <span className="text-[#f5f0e6] font-medium">Total</span>
                  <span className="text-[#c9a962] text-xl font-medium">
                    {formatPrice(total)}
                  </span>
                </div>
                <p className="text-[#f5f0e6]/30 text-[10px] mt-2">
                  Including VAT. Payment on delivery.
                </p>
              </div>

              {/* Contact CTA */}
              <div className="mt-6 pt-6 border-t border-[#c9a962]/10">
                <p className="text-[#f5f0e6]/40 text-xs text-center mb-3">
                  Questions about your order?
                </p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 border border-[#25D366]/30 text-[#25D366] text-xs tracking-wider uppercase hover:bg-[#25D366]/10 transition-colors"
                >
                  <Phone className="w-3 h-3" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
