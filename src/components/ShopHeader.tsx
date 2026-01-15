"use client";

import Link from "next/link";
import { useCart } from "@/app/cart/CartContext";

export default function ShopHeader() {
  const { totalItems } = useCart();

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        borderBottom: "1px solid #e5e5e5",
      }}
    >
      <Link href="/shop" style={{ fontWeight: "bold" }}>
        Shop
      </Link>

      <Link href="/cart">
        Cart ({totalItems})
      </Link>
    </header>
  );
}
