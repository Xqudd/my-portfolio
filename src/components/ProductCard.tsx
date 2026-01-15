"use client";

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
          backgroundColor: "#fff",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
          transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
          cursor: "pointer",
          border: "1px solid #f0f0f0",
        }}
        className="product-card"
      >
        <div
          style={{
            height: "280px",
            backgroundImage: `url('/shop/products/${product.image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.1) 100%)",
              opacity: 0,
              transition: "opacity 0.3s ease",
            }}
            className="image-overlay"
          />
        </div>

        <div style={{ padding: "1.75rem" }}>
          <p
            style={{
              fontSize: "0.8rem",
              letterSpacing: "1px",
              textTransform: "uppercase",
              color: "#999",
              marginBottom: "0.5rem",
              fontWeight: 500,
            }}
          >
            Essentials
          </p>
          <h3
            style={{
              marginBottom: "0.75rem",
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#2d3436",
            }}
          >
            {product.name}
          </h3>
          <p style={{ color: "#6b7280", fontSize: "0.95rem", marginBottom: "1rem", lineHeight: 1.5 }}>
            {product.description}
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ color: "#2d3436", fontWeight: 700, fontSize: "1.1rem" }}>
              ${product.basePrice}
            </div>
            <div
              style={{
                color: "#78716c",
                fontSize: "0.85rem",
                fontWeight: 500,
                transition: "color 0.3s ease",
              }}
            >
              Explore →
            </div>
          </div>
        </div>

        <style>{`
          .product-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 35px rgba(0,0,0,0.15);
          }
          
          .product-card:hover .image-overlay {
            opacity: 1;
          }
        `}</style>
      </div>
    </Link>
  );
}
