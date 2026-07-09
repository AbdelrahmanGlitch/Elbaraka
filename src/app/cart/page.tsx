"use client";

import CartItem from "../../components/cart/CartItem";
import CartSummary from "../../components/cart/CartSummary";
import CartFooter from "../../components/cart/CartFooter";
import EmptyCart from "../../components/cart/EmptyCart";

import { useCart } from "../../context/CartContext";
import { useLanguage } from "../providers/LanguageProvider";

export default function CartPage() {
  const { cart } = useCart();
  const { language } = useLanguage();

  return (
    <main className="min-h-screen bg-background pt-28 pb-16">

      <div className="container mx-auto max-w-6xl px-4">

        {/* Page Title */}

        <div className="mb-10">

          <h1 className="text-4xl font-bold">

            {language === "ar"
              ? "سلة الطلب"
              : "Your Cart"}

          </h1>

          <p className="text-muted mt-2">

            {language === "ar"
              ? "راجع طلبك قبل المتابعة لإتمام الطلب."
              : "Review your order before checkout."}

          </p>

        </div>

        {/* Empty Cart */}

        {cart.length === 0 ? (

          <EmptyCart />

        ) : (

          <div className="grid lg:grid-cols-[2fr_1fr] gap-8">

            {/* Cart Items */}

            <div className="space-y-5">

              {cart.map((item) => (

                <CartItem
                  key={item.id}
                  item={item}
                />

              ))}

            </div>

            {/* Summary */}

            <div className="sticky top-28 h-fit rounded-2xl border border-border bg-card p-6">

              <CartSummary />

              <div className="mt-6">

                <CartFooter />

              </div>

            </div>

          </div>

        )}

      </div>

    </main>
  );
}