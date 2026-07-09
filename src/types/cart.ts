export type DiningType = "delivery" | "dine_in";

export interface CartItem {

  id: string;

  title: string;

  arabic: string;

  description?: string;

  arabic_description?: string;

  image?: string;

  quantity: number;

  unitPrice: number;

  totalPrice: number;

  currency: string;

  diningType: DiningType;

}

export interface CartContextType {

  cart: CartItem[];

  addItem: (item: Omit<CartItem, "quantity" | "totalPrice">) => void;

  increaseQuantity: (id: string) => void;

  decreaseQuantity: (id: string) => void;

  removeItem: (id: string) => void;

  clearCart: () => void;

  totalItems: number;

  totalPrice: number;

}