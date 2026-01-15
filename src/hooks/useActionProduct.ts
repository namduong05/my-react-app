import { useCallback } from "react";
import type { Product } from "../types";
import { useProductDispatch } from "./useProducts";

export const useActionProduct = () => {
  const dispatch = useProductDispatch();

  const handleAddProduct = useCallback((product: Product) => {
    dispatch({ type: "ADD_PRODUCT", payload: product });
  }, []);

  const handleEditProduct = useCallback((product: Product) => {
    dispatch({ type: "EDIT_PRODUCT", payload: product });
  }, []);

  const handleDeleteProduct = useCallback((id: string) => {
    dispatch({ type: "DELETE_PRODUCT", payload: id });
  }, []);

  return {
    handleAddProduct,
    handleEditProduct,
    handleDeleteProduct,
  };
};
