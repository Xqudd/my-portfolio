export interface Product {
  id: string;
  name: string;
  basePrice: number;
  sizes: string[];
  colors: string[];
  description?: string;
}

export const products: Product[] = [
  {
    id: "classic-tee",
    name: "Classic Tee",
    basePrice: 25,
    sizes: ["S", "M", "L", "XL"],
    colors: ["black", "white"],
    description: "Clean, minimalist cotton tee."
  },
];
