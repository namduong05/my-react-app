import { useContext } from "react";
import { CartDispatchContext } from "../context/CartContext";

export const useCartDispatch = () => {
  const context = useContext(CartDispatchContext);
  if (!context) throw new Error("Lỗi useCartDispatch");
  return context;
};
