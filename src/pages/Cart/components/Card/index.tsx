import { QuantityInput } from "../../../../components/QuantityInput";
import { useCart } from "../../../../hooks/useCart";
import { Item } from "../../../../reducers/reducer";
import {
  CardContainer,
  InputContainer,
  Line,
  MainCardContainer,
  Price,
  RemoveButton,
  TrashIcon,
} from "./style";

interface CardProps {
  item: Item;
}
export function Card({ item }: CardProps) {
  const { decrementQuantityProduct, incrementQuantityProduct, deleteProduct } =
    useCart();
  return (
    <>
      <CardContainer>
        <div>
          <img src={item.coffee.image} />
          <MainCardContainer>
            <p>{item.coffee.title}</p>
            <InputContainer>
              <QuantityInput
                quantity={item.quantity}
                decrementQuantity={() =>
                  decrementQuantityProduct(item.coffee.id)
                }
                incrementQuantity={() =>
                  incrementQuantityProduct(item.coffee.id)
                }
              />
              <RemoveButton onClick={() => deleteProduct(item.coffee.id)}>
                <TrashIcon size={16} weight="bold" />
                <span>REMOVER</span>
              </RemoveButton>
            </InputContainer>
          </MainCardContainer>
        </div>
        <Price>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(item.coffee.price * item.quantity)}
        </Price>
      </CardContainer>
      <Line />
    </>
  );
}
