import { Minus, Plus } from "@phosphor-icons/react";
import { Container } from "./style";

interface QuantityInputProps {
  quantity: number;
  incrementQuantity: (productId?: string) => void;
  decrementQuantity: (productId?: string) => void;
}
export function QuantityInput({
  decrementQuantity,
  incrementQuantity,
  quantity,
}: QuantityInputProps) {
  return (
    <Container>
      <button onClick={() => decrementQuantity()}>
        <Minus size={14} />
      </button>
      <span>{quantity}</span>
      <button onClick={() => incrementQuantity()}>
        <Plus size={14} />
      </button>
    </Container>
  );
}
