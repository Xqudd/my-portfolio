import Link from "next/link";
import { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/shop/${product.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        style={{
          borderRadius: 12,
          overflow: "hidden",
          background: "#fff",
          boxShadow: "0 6px 18px rgba(15,23,42,0.06)",
          transition: "transform 180ms ease, boxShadow 180ms ease",
          display: "flex",
          flexDirection: "column",
        }}
        className="product-card"
      >
        <div
          style={{
            height: 180,
            background: `linear-gradient(180deg, #f5f7fb 0%, #eef2ff 100%)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#9aa4b2",
            fontSize: 14,
          }}
        >
          Image
        </div>

        <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
            <h3 style={{ margin: 0, fontSize: 16 }}>{product.name}</h3>
            <div style={{ color: "#111", fontWeight: 700 }}>${product.basePrice}</div>
          </div>

          <p style={{ margin: 0, color: "#56606c", fontSize: 13, lineHeight: 1.3 }}>
            {product.description ?? "Clean, minimalist design."}
          </p>

          <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
            <button
              style={{
                marginLeft: "auto",
                padding: "8px 12px",
                borderRadius: 8,
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
        </div>
      </div>
    </Link>
  );
}