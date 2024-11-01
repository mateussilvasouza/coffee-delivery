import { ShoppingCartSimple } from "@phosphor-icons/react";
import lodash from "lodash";
import { useState } from "react";
import { useTheme } from "styled-components";

import { QuantityInput } from "../../../../components/QuantityInput";
import { useCart } from "../../../../hooks/useCart";
import {
  CardContainer,
  CartButton,
  Control,
  Order,
  Price,
  Tags,
} from "./style";

interface ICoffee {
  id: string;
  title: string;
  description: string;
  tags: string[];
  price: number;
  image: string;
}

interface CardProps {
  coffee: ICoffee;
}
export function Card({ coffee }: CardProps) {
  const theme = useTheme();
  const { addNewProduct } = useCart();
  const [quantity, setQuantity] = useState(1);

  function incrementQuantity() {
    setQuantity(quantity + 1);
  }
  function decrementQuantity() {
    if (quantity > 1) setQuantity(quantity - 1);
  }

  function handleAddNewProduct() {
    const newProduct = {
      coffee: coffee,
      quantity,
    };
    addNewProduct(newProduct);
  }

  return (
    <CardContainer key={coffee.id}>
      <img src={coffee.image} alt="" style={{ width: "120px" }} />
      <Tags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id} - ${tag}`}>{lodash.toUpper(tag)}</span>
        ))}
      </Tags>
      <h5>{coffee.title}</h5>
      <label>{coffee.description}</label>
      <Control>
        <Price>
          <span>
            {new Intl.NumberFormat("pt-br", {
              style: "currency",
              currency: "BRL",
            })
              .format(coffee.price)
              .substring(0, 3)}
          </span>
          <span>
            {new Intl.NumberFormat("pt-br", {
              style: "currency",
              currency: "BRL",
            })
              .format(coffee.price)
              .substring(3)}
          </span>
        </Price>
        <Order>
          <QuantityInput
            quantity={quantity}
            decrementQuantity={decrementQuantity}
            incrementQuantity={incrementQuantity}
          />

          <CartButton onClick={handleAddNewProduct}>
            <ShoppingCartSimple
              size={22}
              color={theme.colors["white"]}
              weight="fill"
            />
          </CartButton>
        </Order>
      </Control>
    </CardContainer>
  );
}
