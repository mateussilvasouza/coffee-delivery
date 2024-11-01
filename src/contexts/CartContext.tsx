import {
  createContext,
  ReactNode,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import { useGetDeliveryDistance } from "../hooks/useGetDeliveryDistance";
import {
  addProduct,
  decrementProduct,
  emptyCart,
  incrementProduct,
  removeProduct,
} from "../reducers/actions";
import { cartReducer, Item } from "../reducers/reducer";

export enum PaymentTypes {
  CREDIT = "credit",
  DEBIT = "debit",
  MONEY = "money",
}

const DELIVERY_PRICE_FOR_KM = import.meta.env.VITE_DELIVERY_PRICE_FOR_KM;

export interface CheckoutInfo {
  cep: string;
  address: string;
  number: number;
  complement: string | null;
  neighborhood: string;
  city: string;
  state: string;
  paymentType: "credit" | "debit" | "money";
}

interface CartContextType {
  items: Item[];
  checkoutInfo: CheckoutInfo | null;
  amountItems: number;
  totalPriceItems: number;
  deliveryPrice: number;
  totalPrice: number;
  addNewProduct: (product: Item) => void;
  deleteProduct: (productId: string) => void;
  incrementQuantityProduct: (productId: string) => void;
  decrementQuantityProduct: (productId: string) => void;
  confirmPurchase: (checkoutData: CheckoutInfo) => void;
  calculateDeliveryPrice: (zipcode: string) => void;
  purchaseMade: CheckoutInfo | null;
}
export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}
export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      items: [] as Item[],
    },
    (initialState) => {
      const storedStateAsJson = localStorage.getItem(
        "@coffee-delivery:cart-state-1.0.0"
      );

      if (storedStateAsJson) {
        return JSON.parse(storedStateAsJson);
      }

      return initialState;
    }
  );

  useEffect(() => {
    const stateJson = JSON.stringify(cartState);
    localStorage.setItem("@coffee-delivery:cart-state-1.0.0", stateJson);
  }, [cartState]);

  const [amountItems, setamountItems] = useState(0);
  const [totalPriceItems, setTotalPriceItems] = useState(0);
  const [deliveryPrice, setDeliveryPrice] = useState(0);
  const { getDeliveryDistance } = useGetDeliveryDistance();

  const [checkoutInfo, setCheckoutInfo] = useState<CheckoutInfo | null>(null);
  const [purchaseMade, setPurchaseMade] = useState<CheckoutInfo | null>(() => {
    const storedStateAsJson = localStorage.getItem(
      "@coffee-delivery:purchase-made-1.0.0"
    );

    if (storedStateAsJson) {
      return JSON.parse(storedStateAsJson);
    }

    return null;
  });

  const totalPrice = useMemo(
    () => totalPriceItems + deliveryPrice,
    [deliveryPrice, totalPriceItems]
  );
  useEffect(() => {
    const amountItems = cartState.items.reduce(
      (acc, current) => acc + current.quantity,
      0
    );
    const totalPriceItems = cartState.items.reduce(
      (acc, current) => acc + current.quantity * current.coffee.price,
      0
    );
    setTotalPriceItems(totalPriceItems);
    setamountItems(amountItems);

    if (cartState.items.length === 0) setDeliveryPrice(0);
  }, [cartState.items]);

  function addNewProduct(product: Item) {
    dispatch(addProduct(product));
  }

  function deleteProduct(productId: string) {
    dispatch(removeProduct(productId));
  }
  function incrementQuantityProduct(productId: string) {
    dispatch(incrementProduct(productId));
  }
  function decrementQuantityProduct(productId: string) {
    dispatch(decrementProduct(productId));
  }

  async function calculateDeliveryPrice(zipcode: string) {
    const deliveryDistance = await getDeliveryDistance(zipcode);
    const deliveryPriceTotal = deliveryDistance
      ? deliveryDistance * parseFloat(DELIVERY_PRICE_FOR_KM)
      : 0;
    setDeliveryPrice(deliveryPriceTotal);
  }

  function emptyShoppingCart() {
    dispatch(emptyCart());
  }

  function confirmPurchase(checkoutData: CheckoutInfo) {
    setCheckoutInfo(checkoutData);
    localStorage.setItem(
      "@coffee-delivery:purchase-made-1.0.0",
      JSON.stringify(checkoutData)
    );
    setPurchaseMade(checkoutData);
    emptyShoppingCart();
  }

  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        checkoutInfo,
        amountItems,
        totalPriceItems,
        deliveryPrice,
        totalPrice,
        addNewProduct,
        deleteProduct,
        incrementQuantityProduct,
        decrementQuantityProduct,
        confirmPurchase,
        calculateDeliveryPrice,
        purchaseMade,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
