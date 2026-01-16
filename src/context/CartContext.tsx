import { createContext, useReducer, type ReactNode } from "react";
import type { CartAction, Cart } from "../types";

export const CartStateContext = createContext<Cart[] | null>(null);
export const CartDispatchContext =
  createContext<React.Dispatch<CartAction> | null>(null);

export const cartReducer = (state: Cart[], action: CartAction): Cart[] => {
  switch (action.type) {
    case "ADD_TO_CART":
      const exists = state.find((item) => item.id === action.payload.id);
      if (exists)
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      return [...state, { ...action.payload, quantity: 1 }];
    case "DECREASE":
      const prodItem = state.find((item) => item.id === action.payload);
      if (!prodItem) return state;
      if (prodItem.quantity === 1)
        return state.filter((item) => item.id !== action.payload);
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    case "REMOVE":
      return state.filter((item) => item.id !== action.payload);
    case "REFRESH_CART":
      const latestProducts = action.payload;
      //1. Xóa các sản phẩm bị xóa
      const lastItems = state.filter((item) =>
        latestProducts.some((p) => p.id === item.id)
      );
      //2.  Cập nhật tên và giá
      return lastItems.map((item) => {
        const currCartItem = latestProducts.find((p) => p.id === item.id);
        if (currCartItem) {
          return {
            ...item,
            name: currCartItem?.name,
            price: currCartItem?.price,
          };
        }
        return item;
      });
    case "CLEAR":
      return [];
    default:
      return state;
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  return (
    <CartStateContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
};
