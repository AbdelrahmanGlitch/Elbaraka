"use client";

import { useCart } from "../../context/CartContext";
import { useLanguage } from "../../app/providers/LanguageProvider";

export default function CartSummary() {
  const { totalItems, totalPrice } = useCart();

  const { language } = useLanguage();

  return (
    <div
      className="
      border-t
      border-border
      pt-5
      space-y-4
      "
    >
      <div
        className="
        flex
        justify-between
        text-muted
        "
      >
        <span>
          {language === "ar"
            ? "عدد الأصناف"
            : "Items"}
        </span>

        <span>{totalItems}</span>
      </div>

      <div
        className="
        flex
        justify-between
        items-center
        font-bold
        text-xl
        "
      >
        <span>
          {language === "ar"
            ? "الإجمالي"
            : "Total"}
        </span>

        <span className="text-price">
          {totalPrice} EGP
        </span>
      </div>
    </div>
  );
}