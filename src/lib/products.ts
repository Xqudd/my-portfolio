export interface Product {
  id: string;
  name: string;
  basePrice: number;
  sizes: string[];
  colors: string[];
  description?: string;
  image: string;
}

export const products: Product[] = [
  {
    id: "classic-tee",
    name: "Trail Tee",
    basePrice: 25,
    sizes: ["S", "M", "L", "XL"],
    colors: ["black", "white"],
    description: "Breathable cotton essentials for every trail. Simple, durable, ready for adventure.",
    image: "shirt.jpg",
  },
  {
    id: "classic-hoodie",
    name: "Summit Hoodie",
    basePrice: 45,
    sizes: ["S", "M", "L", "XL"],
    colors: ["black", "white"],
    description: "Warm layers for mountain camps and cool mornings. Your go-to around the fire.",
    image: "hoodie.jpg",
  },
  {
    id: "classic-jacket",
    name: "Explorer Jacket",
    basePrice: 65,
    sizes: ["S", "M", "L", "XL"],
    colors: ["black", "white"],
    description: "Weather-ready protection for serious explorers. Built for long days outdoors.",
    image: "jacket.jpg",
  },
];
