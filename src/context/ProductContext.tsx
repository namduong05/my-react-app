import { createContext, useReducer, type ReactNode } from "react";
import type { ProductAction, Product } from "../types";
import { products as initialProducts } from "../data/products";

export const ProductStateContext = createContext<Product[] | null>(null);
export const ProductDispatchContext =
  createContext<React.Dispatch<ProductAction> | null>(null);

export const productReducer = (
  state: Product[],
  action: ProductAction
): Product[] => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...state, action.payload];
    case "EDIT_PRODUCT":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, name: action.payload.name, price: action.payload.price }
          : item
      );
    case "DELETE_PRODUCT":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [product, dispatch] = useReducer(productReducer, initialProducts);
  return (
    <ProductStateContext.Provider value={product}>
      <ProductDispatchContext.Provider value={dispatch}>
        {children}
      </ProductDispatchContext.Provider>
    </ProductStateContext.Provider>
  );
};
