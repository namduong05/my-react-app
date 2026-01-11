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
  | { type: "INCREASE"; payload: number }
  | { type: "DECREASE"; payload: number }
  | { type: "REMOVE"; payload: number }
  | { type: "CLEAR" };
