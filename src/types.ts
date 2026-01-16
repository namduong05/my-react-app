export interface Product {
  id: string;
  name: string;
  price: number;
}

export interface Cart extends Product {
  quantity: number;
}

export type CartAction =
  | { type: "ADD_TO_CART"; payload: Product }
  | { type: "DECREASE"; payload: string }
  | { type: "REMOVE"; payload: string }
  | { type: "REFRESH_CART"; payload: Product[] }
  | { type: "CLEAR" };

export type ProductAction =
  | { type: "ADD_PRODUCT"; payload: Product }
  | { type: "EDIT_PRODUCT"; payload: Product }
  | { type: "DELETE_PRODUCT"; payload: string };
