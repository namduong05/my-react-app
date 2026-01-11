import { useContext } from "react";
import { CartStateContext } from "../context/CartContext";

export const useCartState = () => {
  const context = useContext(CartStateContext);
  if (!context) throw new Error("Lỗi useCartState");
  return context;
};
