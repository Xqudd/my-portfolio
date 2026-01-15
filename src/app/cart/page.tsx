"use client";

import { useCart } from "@/app/cart/CartContext";

export default function CartPage() {
  const { items, removeItem, totalPrice } = useCart();

  if (!items || items.length === 0) {
    return (
      <div style={{ minHeight: "60vh", display: "grid", placeItems: "center", padding: "3rem" }}>
        <div
          style={{
            textAlign: "center",
            background: "#fff",
            padding: "2rem",
            borderRadius: 12,
            boxShadow: "0 8px 24px rgba(15,23,42,0.06)",
            maxWidth: 560,
          }}
        >
          <h2 style={{ marginTop: 0 }}>Your cart is empty</h2>
          <p style={{ color: "#56606c" }}>Add some pieces from the shop to get started.</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ marginBottom: "1.5rem", fontSize: "1.6rem" }}>Your Cart</h1>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "1.5rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {items.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                gap: 12,
                alignItems: "center",
                padding: 12,
                borderRadius: 10,
                background: "#fff",
                boxShadow: "0 6px 18px rgba(15,23,42,0.04)",
              }}
            >
              <div
                style={{
                  width: 96,
                  height: 84,
                  borderRadius: 8,
                  background: "#f1f5f9",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#9aa4b2",
                  fontSize: 13,
                  backgroundImage: item.image ? `url('/shop/products/${item.image}')` : undefined,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {!item.image && "Img"}
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
                  <div>
                    <div style={{ fontWeight: 700 }}>{item.name ?? "Product"}</div>
                    <div style={{ color: "#56606c", fontSize: 13 }}>
                      {item.size ? `Size: ${item.size}` : null} {item.color ? `• ${item.color}` : null}
                    </div>
                  </div>

                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontWeight: 800 }}>${(item.price * (item.quantity || 1)).toFixed(2)}</div>
                    <div style={{ color: "#56606c", fontSize: 13 }}>Qty: {item.quantity}</div>
                  </div>
                </div>

                <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
                  <button
                    onClick={() => removeItem(item.id)}
                    style={{
                      padding: "6px 10px",
                      borderRadius: 8,
                      border: "1px solid #e6e9ef",
                      background: "#fff",
                      cursor: "pointer",
                      fontWeight: 600,
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside style={{ position: "relative" }}>
          <div
            style={{
              position: "sticky",
              top: 24,
              background: "#fff",
              padding: 16,
              borderRadius: 12,
              boxShadow: "0 12px 30px rgba(15,23,42,0.06)",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ color: "#56606c" }}>Subtotal</div>
              <div style={{ fontWeight: 800 }}>${totalPrice.toFixed(2)}</div>
            </div>

            <button
              style={{
                width: "100%",
                padding: "10px 12px",
                background: "#111",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Checkout
            </button>

            <button
              style={{
                width: "100%",
                padding: "8px 12px",
                background: "transparent",
                color: "#111",
                border: "1px solid #e6e9ef",
                borderRadius: 8,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Continue shopping
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}