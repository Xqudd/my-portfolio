"use client";

import { products, Product } from "@/lib/products";
import { designs, Design } from "@/lib/designs";
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

  if (!product) return notFound();

  const [size, setSize] = useState<string>(product.sizes[0]);
  const [color, setColor] = useState<string>(product.colors[0]);
  const [designId, setDesignId] = useState<string>(designs[0].id);
  const [added, setAdded] = useState(false);

  const design = designs.find((d: Design) => d.id === designId)!;

  const { addItem } = useCart();
  const price = product.basePrice + design.extraCost;

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem" }}>
      <header style={{ marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: 8 }}>
        <h1 style={{ margin: 0, fontSize: "1.75rem" }}>{product.name}</h1>
        <p style={{ margin: 0, color: "#56606c" }}>
          {product.description ?? "Clean, minimalist design."}
        </p>
      </header>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 420px",
          gap: "2rem",
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
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(180deg, #f5f7fb 0%, #eef2ff 100%)",
              color: "#9aa4b2",
              fontSize: 14,
            }}
          >
            Image
          </div>
        </div>

        <aside
          style={{
            background: "#fff",
            borderRadius: 12,
            padding: "1.25rem",
            boxShadow: "0 6px 18px rgba(15,23,42,0.06)",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <div style={{ color: "#111", fontWeight: 700, fontSize: 20 }}>${price}</div>
            <div style={{ color: "#7b8794", fontSize: 13 }}>SKU: {product.id}</div>
          </div>

          <div style={{ display: "flex", gap: 8 }}>
            <label style={{ flex: 1 }}>
              <div style={{ fontSize: 12, color: "#7b8794", marginBottom: 6 }}>Size</div>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                style={{
                  width: "100%",
                  padding: "8px 10px",
                  borderRadius: 8,
                  border: "1px solid #e6e9ef",
                  background: "#fff",
                }}
              >
                {product.sizes.map((s: string) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </label>

            <label style={{ width: 120 }}>
              <div style={{ fontSize: 12, color: "#7b8794", marginBottom: 6 }}>Color</div>
              <select
                value={color}
                onChange={(e) => setColor(e.target.value)}
                style={{
                  width: "100%",
                  padding: "8px 10px",
                  borderRadius: 8,
                  border: "1px solid #e6e9ef",
                  background: "#fff",
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

          <div>
            <div style={{ fontSize: 12, color: "#7b8794", marginBottom: 6 }}>Design</div>
            <select
              value={designId}
              onChange={(e) => setDesignId(e.target.value)}
              style={{
                width: "100%",
                padding: "8px 10px",
                borderRadius: 8,
                border: "1px solid #e6e9ef",
                background: "#fff",
              }}
            >
              {designs.map((d: Design) => (
                <option key={d.id} value={d.id}>
                  {d.name} {d.extraCost ? `(+ $${d.extraCost})` : ""}
                </option>
              ))}
            </select>
          </div>

          <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
            <button
              onClick={() => {
                addItem({
                  id: nanoid(),
                  productId: product.id,
                  designId,
                  size,
                  color,
                  price,
                  quantity: 1,
                });
                setAdded(true);
              }}
              style={{
                marginLeft: "auto",
                padding: "10px 14px",
                borderRadius: 10,
                border: "none",
                background: "#111",
                color: "#fff",
                fontWeight: 700,
                cursor: "pointer",
              }}
              aria-label={`Add ${product.name} to cart`}
            >
              {added ? "Added ✓" : "Add to Cart"}
            </button>

            <button
              style={{
                padding: "10px 12px",
                borderRadius: 10,
                border: "1px solid #e6e9ef",
                background: "#fff",
                fontWeight: 600,
                cursor: "pointer",
              }}
              aria-label={`View ${product.name}`}
            >
              View
            </button>
          </div>

          <p style={{ margin: 0, color: "#56606c", fontSize: 13, lineHeight: 1.4 }}>
            {product.description ?? "Clean, minimalist design."}
          </p>
        </aside>
      </div>
    </div>
  );
}