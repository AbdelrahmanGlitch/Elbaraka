"use client";

import { Minus, Plus } from "lucide-react";
import { useCart } from "../../context/CartContext";

interface Props {
  id: string;
}

export default function QuantitySelector({ id }: Props) {
  const {
    cart,
    addItem,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const cartItem = cart.find((item) => item.id === id);

  if (!cartItem) {
    return null;
  }

  return (
    <div
      className="
      flex
      items-center
      justify-between
      rounded-xl
      border
      border-border
      bg-card
      overflow-hidden
      w-[130px]
      h-11
    "
    >
      <button
        onClick={() => decreaseQuantity(id)}
        className="
          h-full
          w-10
          flex
          items-center
          justify-center
          hover:bg-primary
          hover:text-white
          transition
        "
      >
        <Minus size={18} />
      </button>

      <span
        className="
          font-semibold
          text-lg
          select-none
        "
      >
        {cartItem.quantity}
      </span>

      <button
        onClick={() => increaseQuantity(id)}
        className="
          h-full
          w-10
          flex
          items-center
          justify-center
          hover:bg-primary
          hover:text-white
          transition
        "
      >
        <Plus size={18} />
      </button>
    </div>
  );
}