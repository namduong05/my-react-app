import { useCallback } from "react";
import type { Product } from "../types";
import { useCart } from "./useCart";

export const useAction = () => {
  const { dispatch } = useCart();

  const handleAddToCart = useCallback((product: Product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  }, []);

  const handleIncrease = useCallback((id: number) => {
    dispatch({ type: "INCREASE", payload: id });
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
    handleIncrease,
    handleDecrease,
    handleRemoveFromCart,
    handleClearAll,
  };
};
