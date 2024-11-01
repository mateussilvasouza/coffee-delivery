import { ActionTypes } from "./actions";

export interface Coffee {
  id: string;
  title: string;
  description: string;
  tags: string[];
  price: number;
  image: string;
}

export interface Item {
  coffee: Coffee;
  quantity: number;
}

export interface ItemState {
  items: Item[];
}
export function cartReducer(state: ItemState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT:
      const items = state.items.find(
        (item) => item.coffee.id === action.payload.product.coffee.id
      );
      if (items) {
        return {
          ...state,
          items: state.items.map((coffee) => {
            if (coffee.coffee.id === items.coffee.id) {
              return {
                ...coffee,
                quantity: coffee.quantity + action.payload.product.quantity,
              };
            } else {
              return coffee;
            }
          }),
        };
      } else {
        return {
          ...state,
          items: [...state.items, action.payload.product],
        };
      }

    case ActionTypes.INCREMENT_PRODUCT:
      return {
        ...state,
        items: state.items.map((coffee) => {
          if (coffee.coffee.id === action.payload.productId) {
            return { ...coffee, quantity: coffee.quantity + 1 };
          } else {
            return coffee;
          }
        }),
      };
    case ActionTypes.DECREMENT_PRODUCT:
      return {
        ...state,
        items: state.items.map((coffee) => {
          if (
            coffee.coffee.id === action.payload.productId &&
            coffee.quantity > 1
          ) {
            return { ...coffee, quantity: coffee.quantity - 1 };
          } else {
            return coffee;
          }
        }),
      };
    case ActionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        items: state.items.filter(
          (coffee) => coffee.coffee.id !== action.payload.productId
        ),
      };
    case ActionTypes.EMPTY_CART:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
}
