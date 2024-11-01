import { Item } from "./reducer";

export enum ActionTypes {
  INCREMENT_PRODUCT = "INCREMENT_PRODUCT",
  DECREMENT_PRODUCT = "DECREMENT_PRODUCT",
  REMOVE_PRODUCT = "REMOVE_PRODUCT",
  ADD_PRODUCT = "ADD_PRODUCT",
  EMPTY_CART = "EMPTY_CART",
}

export function addProduct(product: Item) {
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload: { product },
  };
}

export function incrementProduct(productId: string) {
  return {
    type: ActionTypes.INCREMENT_PRODUCT,
    payload: { productId },
  };
}
export function decrementProduct(productId: string) {
  return {
    type: ActionTypes.DECREMENT_PRODUCT,
    payload: { productId },
  };
}

export function removeProduct(productId: string) {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: { productId },
  };
}

export function emptyCart() {
  return {
    type: ActionTypes.EMPTY_CART,
  };
}
