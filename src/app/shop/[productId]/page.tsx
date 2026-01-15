"use client";

import { products, Product } from "@/lib/products";
import { useCart } from "@/app/cart/CartContext";
import { notFound } from "next/navigation";
import { useState } from "react";
import { nanoid } from "nanoid";
import { use } from "react";

export default function ProductPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = use(params);
  const product = products.find((p: Product) => p.id === productId);

  const [size, setSize] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [added, setAdded] = useState(false);

  const { addItem } = useCart();

  if (!product) return notFound();

  // Initialize size and color after checking product exists
  if (size === "") setSize(product.sizes[0]);
  if (color === "") setColor(product.colors[0]);

  const price = product.basePrice;

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#fafaf9" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem" }}>
        <header style={{ marginBottom: "3rem", display: "flex", flexDirection: "column", gap: 12 }}>
          <p
            style={{
              fontSize: "0.85rem",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#999",
              margin: 0,
              fontWeight: 500,
            }}
          >
            Explore Our Gear
          </p>
          <h1
            style={{
              margin: 0,
              fontSize: "2.5rem",
              fontWeight: 700,
              color: "#2d3436",
            }}
          >
            {product.name}
          </h1>
          <p
            style={{
              margin: 0,
              color: "#6b7280",
              fontSize: "1.1rem",
              maxWidth: "600px",
              lineHeight: 1.6,
            }}
          >
            {product.description ?? "Thoughtfully crafted for the outdoors."}
          </p>
        </header>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 420px",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          <div
            style={{
              borderRadius: 12,
              overflow: "hidden",
              background: "#fff",
              boxShadow: "0 6px 18px rgba(15,23,42,0.06)",
            }}
          >
            <div
              style={{
                height: 560,
                backgroundImage: `url('/shop/products/${product.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#9aa4b2",
                fontSize: 14,
                position: "relative",
              }}
            >
              {!product.image && "Image"}
            </div>
          </div>

        <aside
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: "2rem",
            boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
            display: "flex",
            flexDirection: "column",
            gap: 18,
            border: "1px solid #f0f0f0",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px solid #eaeaea", paddingBottom: "1rem" }}>
            <div style={{ color: "#2d3436", fontWeight: 700, fontSize: 24 }}>${price}</div>
            <div style={{ color: "#999", fontSize: 12, letterSpacing: "0.5px", textTransform: "uppercase" }}>SKU: {product.id}</div>
          </div>

          <div style={{ display: "flex", gap: 12, flexDirection: "column" }}>
            <label style={{ flex: 1 }}>
              <div style={{ fontSize: 12, color: "#6b7280", marginBottom: 8, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>Size</div>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px 12px",
                  borderRadius: 10,
                  border: "1px solid #e5e7eb",
                  background: "#fff",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  cursor: "pointer",
                }}
              >
                {product.sizes.map((s: string) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </label>

            <label>
              <div style={{ fontSize: 12, color: "#6b7280", marginBottom: 8, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>Color</div>
              <select
                value={color}
                onChange={(e) => setColor(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px 12px",
                  borderRadius: 10,
                  border: "1px solid #e5e7eb",
                  background: "#fff",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  cursor: "pointer",
                }}
              >
                {product.colors.map((c: string) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <button
            onClick={() => {
              addItem({
                id: nanoid(),
                productId: product.id,
                name: product.name,
                image: product.image,
                size,
                color,
                price,
                quantity: 1,
              });
              setAdded(true);
            }}
            style={{
              width: "100%",
              padding: "14px 18px",
              borderRadius: 12,
              border: "none",
              background: "#2d3436",
              color: "#fff",
              fontWeight: 700,
              fontSize: "1rem",
              cursor: "pointer",
              transition: "background 0.3s ease",
            }}
            aria-label={`Add ${product.name} to cart`}
          >
            {added ? "✓ Added to Cart" : "Add to Cart"}
          </button>
        </aside>
        </div>
      </div>
    </div>
  );
}