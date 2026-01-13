"use client";

import { CartProvider } from "@/app/cart/CartContext";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CartProvider>{children}</CartProvider>;
}
