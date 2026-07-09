"use client";

import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

import { useCart } from "../../context/CartContext";


export default function CartButton() {

  const router = useRouter();

  const {
    totalItems,
  } = useCart();


  return (

    <button

      onClick={() => router.push("/cart")}

      className="
        relative
        flex
        items-center
        justify-center
        text-foreground
        hover:text-primary
        transition
      "

      aria-label="Cart"

    >

      <ShoppingCart size={26}/>


      {
        totalItems > 0 && (

          <span

            className="
              absolute
              -top-3
              -right-3
              bg-primary
              text-white
              text-xs
              font-bold
              w-5
              h-5
              rounded-full
              flex
              items-center
              justify-center
            "

          >

            {totalItems}

          </span>

        )
      }


    </button>

  );

}