import { type Product } from "../types";

const generateProducts = () => {
  const items = [];
  for (let i = 1; i <= 5000; i++) {
    items.push({
      id: crypto.randomUUID(),
      name: ` Sản phẩm ${i}`,
      price: Math.floor(Math.random() * 1000),
    });
  }
  return items;
};

export const products: Product[] = generateProducts();
