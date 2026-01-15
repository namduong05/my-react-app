import React from "react";
import type { Cart } from "../types";
import { useActionCart } from "../hooks/useActionCart";

const CartItem = ({ item }: { item: Cart }) => {
  const { handleAddToCart, handleDecrease, handleRemoveFromCart } =
    useActionCart();
  return (
    <li
      key={item.id}
      className="border border-gray-200 rounded-xl shawdow-xl px-4 py-2 mb-2"
    >
      <div className="flex justify-around items-center">
        <div>
          <h2 className="text-xl">{item.name}</h2>
          <p className="text-xs mb-2">
            ${item.price} x {item.quantity}
          </p>
          <div className="flex">
            <button
              onClick={() => handleDecrease(item.id)}
              className="border border-gray-300 bg-gray-200 px-2.5"
            >
              -
            </button>
            <span className="border border-gray-300 bg-gray-50 px-2.5">
              {item.quantity}
            </span>
            <button
              onClick={() => handleAddToCart(item)}
              className="border border-gray-300 bg-gray-200 px-2"
            >
              +
            </button>
          </div>
        </div>
        <button
          onClick={() => handleRemoveFromCart(item.id)}
          className="bg-red-500 px-2 py-1 rounded-xl text-white cursor-pointer"
        >
          Xóa
        </button>
      </div>
    </li>
  );
};

export default React.memo(CartItem);
