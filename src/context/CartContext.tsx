"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";

import { CartContextType, CartItem } from "../types/cart";

const CartContext = createContext<CartContextType | null>(null);

interface Props {
  children: ReactNode;
}

export function CartProvider({ children }: Props) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // -------------------------
  // Load Cart
  // -------------------------

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");

    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // -------------------------
  // Save Cart
  // -------------------------

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // -------------------------
  // Add Item
  // -------------------------

  const addItem = (
    item: Omit<CartItem, "quantity" | "totalPrice">
  ) => {
    setCart((prev) => {
      const existing = prev.find((cartItem) => cartItem.id === item.id);
      const openCart = () => setIsCartOpen(true);

        const closeCart = () => setIsCartOpen(false);

        const toggleCart = () =>
        setIsCartOpen((prev) => !prev);

      if (existing) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
                totalPrice:
                  (cartItem.quantity + 1) * cartItem.unitPrice,
              }
            : cartItem
        );
      }

      return [
        ...prev,
        {
          ...item,
          quantity: 1,
          totalPrice: item.unitPrice,
        },
      ];
    });
  };

  // -------------------------
  // Increase Quantity
  // -------------------------

  const increaseQuantity = (id: string) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
              totalPrice:
                (item.quantity + 1) * item.unitPrice,
            }
          : item
      )
    );
  };

  // -------------------------
  // Decrease Quantity
  // -------------------------

  const decreaseQuantity = (id: string) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
                totalPrice:
                  (item.quantity - 1) * item.unitPrice,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // -------------------------
  // Remove Item
  // -------------------------

  const removeItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // -------------------------
  // Clear Cart
  // -------------------------

  const clearCart = () => {
    setCart([]);
  };

  // -------------------------
  // Totals
  // -------------------------

  const totalItems = useMemo(() => {
    return cart.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }, [cart]);

  const totalPrice = useMemo(() => {
    return cart.reduce(
      (total, item) => total + item.totalPrice,
      0
    );
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// -------------------------
// Hook
// -------------------------

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider."
    );
  }

  return context;
}