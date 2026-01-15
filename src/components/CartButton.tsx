"use client";

import Link from "next/link";
import { useCart } from "@/app/cart/CartContext";

export function CartButton() {
  const { totalItems } = useCart();

  return (
    <Link href="/cart" aria-label="Open cart" style={{ textDecoration: "none" }}>
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "8px 12px",
          borderRadius: 8,
          border: "1px solid #e5e5e5",
          background: "#fff",
          color: "#111",
          fontWeight: 600,
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 6h15l-1.5 9h-13z" />
          <circle cx="9" cy="20" r="1" />
          <circle cx="19" cy="20" r="1" />
        </svg>

        <span style={{ fontSize: 13 }}>Cart</span>

        <span
          style={{
            minWidth: 20,
            padding: "2px 6px",
            borderRadius: 999,
            background: "#111",
            color: "#fff",
            fontSize: 12,
            textAlign: "center",
            fontWeight: 700,
          }}
        >
          {totalItems}
        </span>
      </div>
    </Link>
  );
}