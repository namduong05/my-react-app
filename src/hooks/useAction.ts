import { useCallback } from "react";
import type { Product } from "../types";
import { useCartDispatch } from "./useCartDispatch";

export const useAction = () => {
  const dispatch = useCartDispatch();

  const handleAddToCart = useCallback((product: Product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  }, []);

  const handleDecrease = useCallback((id: number) => {
    dispatch({ type: "DECREASE", payload: id });
  }, []);

  const handleRemoveFromCart = useCallback((id: number) => {
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
