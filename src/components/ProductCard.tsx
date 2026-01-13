import Link from "next/link";
import { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/shop/${product.id}`}>
      <div>
        <h3>{product.name}</h3>
        <p>From ${product.basePrice}</p>
      </div>
    </Link>
  );
}
