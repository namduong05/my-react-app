import { useCallback } from "react";
import type { Product } from "../types";
import { useCartDispatch } from "./useCarts";

export const useActionCart = () => {
  const dispatch = useCartDispatch();

  const handleAddToCart = useCallback((product: Product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  }, []);

  const handleDecrease = useCallback((id: string) => {
    dispatch({ type: "DECREASE", payload: id });
  }, []);

  const handleRemoveFromCart = useCallback((id: string) => {
    dispatch({ type: "REMOVE", payload: id });
  }, []);

  const handleClearAll = () => {
    dispatch({ type: "CLEAR" });
  };

  return {
    handleAddToCart,
    handleDecrease,
    handleRemoveFromCart,
    handleClearAll,
  };
};
