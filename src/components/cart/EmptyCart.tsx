"use client";

import { ShoppingBag } from "lucide-react";
import { useLanguage } from "../../app/providers/LanguageProvider";

export default function EmptyCart() {

  const { language } = useLanguage();

  return (

    <div
      className="
      flex
      flex-col
      items-center
      justify-center
      py-16
      px-6
      text-center
      "
    >

      <div
        className="
        w-24
        h-24
        rounded-full
        bg-card
        border
        border-border
        flex
        items-center
        justify-center
        mb-6
        "
      >

        <ShoppingBag
          size={42}
          className="text-muted"
        />

      </div>

      <h2
        className="
        text-xl
        font-bold
        mb-3
        "
      >

        {language === "ar"
          ? "السلة فارغة"
          : "Your cart is empty"}

      </h2>

      <p
        className="
        text-muted
        leading-7
        max-w-xs
        "
      >

        {language === "ar"

          ? "ابدأ بإضافة بعض الوجبات اللذيذة إلى سلتك."

          : "Start adding some delicious meals to your cart."}

      </p>

    </div>

  );

}