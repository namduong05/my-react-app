import { useContext } from "react";
import { CartStateContext, CartDispatchContext } from "../context/CartContext";

export const useCartDispatch = () => {
  const context = useContext(CartDispatchContext);
  if (!context) throw new Error("Lỗi useCartDispatch");
  return context;
};

export const useCartState = () => {
  const context = useContext(CartStateContext);
  if (!context) throw new Error("Lỗi useCartState");
  return context;
};
