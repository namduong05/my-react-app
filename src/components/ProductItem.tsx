import React from "react";
import type { Product } from "../types";
import { useActionCart } from "../hooks/useActionCart";

const ProductItem = ({ product }: { product: Product }) => {
  const { handleAddToCart } = useActionCart();
  return (
    <li
      key={product.id}
      className="border border-gray-200 rounded-xl shawdow-xl px-4 py-2"
    >
      <h2 className="text-xl">{product.name}</h2>
      <p className="text-xs italic my-2"> Giá: {product.price}</p>
      <button
        onClick={() => handleAddToCart(product)}
        className="w-full p-1 bg-green-400 hover:bg-green-500 rounded-xl cursor-pointer"
      >
        Thêm vào giỏ hàng
      </button>
    </li>
  );
};

export default React.memo(ProductItem);
