import { products, Product } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function ShopPage() {
  return (
    <main>
      {products.map((p: Product) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </main>
  );
}
