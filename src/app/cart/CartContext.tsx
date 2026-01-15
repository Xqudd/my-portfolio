"use client";

import { createContext, useContext, useEffect, useState } from "react";

export interface CartItem {
  id: string;
  productId?: string;
  name?: string;
  image?: string;
  size?: string;
  color?: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("cart");
      if (stored) setItems(JSON.parse(stored));
    } catch {
      // ignore
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem("cart", JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items, hydrated]);

  const addItem = (item: CartItem) =>
    setItems((prev) => [...prev, item]);

  const removeItem = (id: string) =>
    setItems((prev) => prev.filter((i) => i.id !== id));

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((sum, i) => sum + (i.quantity || 0), 0);
  const totalPrice = items.reduce((sum, i) => sum + (i.price || 0) * (i.quantity || 0), 0);

  return (
    <CartContext.Provider value={{ items, totalItems, totalPrice, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextType {
  const ctx = useContext(CartContext);
  if (ctx === null) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return ctx;
}