import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function ShopPage() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          height: "75vh",
          backgroundImage:
            "linear-gradient(135deg, rgba(45, 52, 54, 0.4) 0%, rgba(67, 97, 103, 0.3) 100%), url('/shop/hero/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "3rem",
          color: "#ffffff",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: "700px", zIndex: 1 }}>
          <p
            style={{
              fontSize: "0.95rem",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "1rem",
              color: "#d4d4d8",
              fontWeight: 500,
            }}
          >
            Step Into Adventure
          </p>
          <h1
            style={{
              fontSize: "3.5rem",
              marginBottom: "1.5rem",
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: "-1px",
            }}
          >
            Built for the Outside
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: 1.8,
              color: "#e8e8e8",
              marginBottom: "2rem",
            }}
          >
            Thoughtfully designed clothing for long trails, quiet camps, and the wild spaces between. Explore confidently.
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "5rem 2rem",
          backgroundColor: "#fafaf9",
        }}
      >
        <div style={{ marginBottom: "4rem", textAlign: "center" }}>
          <p
            style={{
              fontSize: "0.9rem",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
              color: "#78716c",
              fontWeight: 500,
            }}
          >
            Our Collection
          </p>
          <h2
            style={{
              fontSize: "2.2rem",
              marginBottom: "1rem",
              color: "#2d3436",
              fontWeight: 700,
            }}
          >
            Gear for Every Journey
          </h2>
          <p style={{ color: "#6b7280", fontSize: "1.05rem", maxWidth: "500px", margin: "0 auto" }}>
            Each piece crafted for durability, comfort, and the call of the wild.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
