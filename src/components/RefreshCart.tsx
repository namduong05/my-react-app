import { useEffect } from "react";
import { useCartDispatch } from "../hooks/useCarts";
import { useProductState } from "../hooks/useProducts";

const useRefreshCart = () => {
  const dispatch = useCartDispatch();
  const products = useProductState();
  useEffect(() => {
    dispatch({ type: "REFRESH_CART", payload: products });
  }, [products, dispatch]);
  return null;
};

export default useRefreshCart;
