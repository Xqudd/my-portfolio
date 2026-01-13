"use client";

import { products, Product } from "@/lib/products";
import { designs, Design } from "@/lib/designs";
import { useCart } from "@/app/cart/CartContext";
import { notFound } from "next/navigation";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const product = products.find(
    (p: Product) => p.id === params.productId
  );

  if (!product) return notFound();

  const [size, setSize] = useState<string>(product.sizes[0]);
  const [color, setColor] = useState<string>(product.colors[0]);
  const [designId, setDesignId] = useState<string>(designs[0].id);

  const design = designs.find(
    (d: Design) => d.id === designId
  )!;

  const { addItem } = useCart();
  const price = product.basePrice + design.extraCost;

  return (
    <main>
      <h1>{product.name}</h1>

      <select value={size} onChange={e => setSize(e.target.value)}>
        {product.sizes.map((s: string) => (
          <option key={s}>{s}</option>
        ))}
      </select>

      <select value={color} onChange={e => setColor(e.target.value)}>
        {product.colors.map((c: string) => (
          <option key={c}>{c}</option>
        ))}
      </select>

      <select value={designId} onChange={e => setDesignId(e.target.value)}>
        {designs.map((d: Design) => (
          <option key={d.id} value={d.id}>
            {d.name}
          </option>
        ))}
      </select>

      <p>Total: ${price}</p>

      <button
        onClick={() =>
          addItem({
            id: nanoid(),
            productId: product.id,
            designId,
            size,
            color,
            price,
            quantity: 1,
          })
        }
      >
        Add to Cart
      </button>
    </main>
  );
}
