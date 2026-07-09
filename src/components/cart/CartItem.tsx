"use client";

import Image from "next/image";
import { Trash2 } from "lucide-react";

import { CartItem as CartItemType } from "../../types/cart";
import { useCart } from "../../context/CartContext";
import QuantitySelector from "./QuantitySelector";
import { useLanguage } from "../../app/providers/LanguageProvider";

interface Props {
  item: CartItemType;
}

export default function CartItem({ item }: Props) {
  const { removeItem } = useCart();

  const { language } = useLanguage();

  return (
    <div
      className="
      flex
      gap-4
      p-4
      rounded-2xl
      border
      border-border
      bg-card
      "
    >
      {/* Image */}

      <div
        className="
        relative
        w-24
        h-24
        rounded-xl
        overflow-hidden
        shrink-0
        "
      >
        <Image
          src={item.image || "/placeholder.png"}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}

      <div className="flex-1">

        <div
          className="
          flex
          justify-between
          items-start
          "
        >
          <div>

            <h3
              className="
              font-bold
              text-lg
              "
            >
              {language === "ar"
                ? item.arabic
                : item.title}
            </h3>

            <p
              className="
              text-sm
              text-muted
              mt-1
              "
            >
              {item.unitPrice} EGP
            </p>

          </div>

          <button
            onClick={() => removeItem(item.id)}
            className="
            text-red-500
            hover:text-red-700
            transition
            "
          >
            <Trash2 size={18} />
          </button>

        </div>

        <div
          className="
          mt-4
          flex
          justify-between
          items-center
          "
        >
          <QuantitySelector id={item.id} />

          <span
            className="
            font-bold
            text-price
            text-lg
            "
          >
            {item.totalPrice} EGP
          </span>

        </div>

      </div>

    </div>
  );
}