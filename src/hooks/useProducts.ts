import { useContext } from "react";
import {
  ProductStateContext,
  ProductDispatchContext,
} from "../context/ProductContext";

export const useProductState = () => {
  const context = useContext(ProductStateContext);
  if (!context) throw new Error("Lỗi useProductState");
  return context;
};

export const useProductDispatch = () => {
  const context = useContext(ProductDispatchContext);
  if (!context) throw new Error("Lỗi useProductDispatch");
  return context;
};
