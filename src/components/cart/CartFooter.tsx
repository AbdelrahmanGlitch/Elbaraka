"use client";

import { useRouter } from "next/navigation";

import { ShoppingBag } from "lucide-react";

import { useCart } from "../../context/CartContext";
import { useLanguage } from "../../app/providers/LanguageProvider";

export default function CartFooter() {
  const router = useRouter();

  const { language } = useLanguage();

  const { totalPrice } = useCart();

  function handleCheckout() {
    router.push("/checkout");
  }

  return (
    <div className="space-y-5">

      {/* Total */}

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-muted">
            {language === "ar"
              ? "إجمالي الطلب"
              : "Order Total"}
          </p>

          <h3
            className="
            text-2xl
            font-bold
            text-price
            "
          >
            {totalPrice} EGP
          </h3>

        </div>

        <ShoppingBag
          className="text-primary"
          size={32}
        />

      </div>

      {/* Checkout Button */}

      <button
        onClick={handleCheckout}
        className="
        w-full
        h-14
        rounded-2xl
        bg-primary
        hover:bg-primary-hover
        text-white
        font-semibold
        text-lg
        transition-all
        duration-300
        hover:scale-[1.02]
        active:scale-100
        shadow-lg
        shadow-primary/20
        "
      >
        {language === "ar"
          ? "متابعة الطلب"
          : "Proceed to Checkout"}
      </button>

    </div>
  );
}