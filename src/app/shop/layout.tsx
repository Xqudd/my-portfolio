"use client";

import Link from "next/link";
import { CartButton } from "@/components/CartButton";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#fafafa",
        color: "#111",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.5rem 2rem",
          borderBottom: "1px solid #e5e5e5",
          backgroundColor: "#fff",
        }}
      >
        <Link href="/shop" style={{ textDecoration: "none", color: "#111" }}>
          <strong style={{ fontSize: "1.2rem" }}>Herman&Co</strong>
        </Link>

        <CartButton />
      </header>

      {/* Main */}
      <main style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
        {children}
        <footer
  style={{
    marginTop: "6rem",
    padding: "2rem",
    textAlign: "center",
    color: "#6b7280",
    fontSize: 14,
  }}
>
  <p style={{ marginBottom: "0.75rem" }}>
    Looking for my portfolio?
  </p>

  <a
    href="/portfolio"
    style={{
      color: "#111",
      textDecoration: "underline",
      fontWeight: 600,
    }}
  >
    Visit my work →
  </a>
</footer>

      </main>
    </div>
  );
}
