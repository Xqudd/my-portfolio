"use client";

import { useEffect } from "react";
import { useCart } from "@/app/cart/CartContext";

export default function SuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <main>
      <h1>Order Confirmed</h1>
      <p>Your custom piece is being prepared.</p>
    </main>
  );
}
