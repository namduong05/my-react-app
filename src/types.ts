export interface Product {
  id: number;
  name: string;
  price: number;
}

export interface Cart extends Product {
  quantity: number;
}

export type CartAction =
  | { type: "ADD_TO_CART"; payload: Product }
  | { type: "DECREASE"; payload: number }
  | { type: "REMOVE"; payload: number }
  | { type: "CLEAR" };
