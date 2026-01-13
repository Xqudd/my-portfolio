export interface Design {
  id: string;
  name: string;
  imageUrl: string;
  extraCost: number;
}

export const designs: Design[] = [
  {
    id: "logo-front",
    name: "Front Logo",
    imageUrl: "/designs/logo-front.png",
    extraCost: 5,
  },
];
