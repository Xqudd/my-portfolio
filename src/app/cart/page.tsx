"use client";

import { useCart, CartItem } from "@/app/cart/CartContext";

export default function CartPage() {
  const { items, removeItem } = useCart();

  return (
    <main>
      {items.map((item: CartItem) => (
        <div key={item.id}>
          <p>{item.productId} – ${item.price}</p>
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}
    </main>
  );
}
