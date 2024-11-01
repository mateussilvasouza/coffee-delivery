import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { CheckoutInfo } from "../../contexts/CartContext";
import { useCart } from "../../hooks/useCart";
import { Card } from "./components/Card";
import { CheckoutForm } from "./components/CheckoutInfos";
import {
  CardList,
  Container,
  PriceContainer,
  PriceInfo,
  Submit,
} from "./style";

const newCheckoutFormValidationSchema = z.object({
  cep: z.string().length(8).regex(/[0-9]/),
  address: z.string(),
  number: z.string().transform((val) => Number(val)),
  complement: z.string().nullable(),
  neighborhood: z.string(),
  city: z.string(),
  state: z.string().length(2),
  paymentType: z.enum(["credit", "debit", "money"]),
});

export type NewCheckoutFormData = z.infer<
  typeof newCheckoutFormValidationSchema
>;

export function Cart() {
  const { items, totalPriceItems, deliveryPrice, totalPrice, confirmPurchase } =
    useCart();
  const navigate = useNavigate();

  const methods = useForm<NewCheckoutFormData>({
    resolver: zodResolver(newCheckoutFormValidationSchema),
  });

  const { handleSubmit, reset } = methods;

  function handleConfirmPurchase(data: CheckoutInfo) {
    confirmPurchase(data);
    navigate("/success");
    reset();
  }

  return (
    <Container>
      <div>
        <h2>Complete seu Pedido</h2>
        <FormProvider {...methods}>
          <CheckoutForm />
        </FormProvider>
      </div>

      <div>
        <h2>Cafés Selecionados</h2>
        <CardList>
          {items.map((item) => (
            <Card key={item.coffee.id} item={item} />
          ))}

          <PriceContainer>
            <PriceInfo>
              <p>Total de itens</p>
              <p>
                {new Intl.NumberFormat("pt-br", {
                  style: "currency",
                  currency: "BRL",
                }).format(totalPriceItems)}
              </p>
            </PriceInfo>
            <PriceInfo>
              <p>Entrega</p>
              <p>
                {new Intl.NumberFormat("pt-br", {
                  style: "currency",
                  currency: "BRL",
                }).format(deliveryPrice)}
              </p>
            </PriceInfo>
            <PriceInfo>
              <p>Total</p>
              <p>
                {new Intl.NumberFormat("pt-br", {
                  style: "currency",
                  currency: "BRL",
                }).format(totalPrice)}
              </p>
            </PriceInfo>
          </PriceContainer>
          <Submit type="submit" onClick={handleSubmit(handleConfirmPurchase)}>
            CONFIRMAR PEDIDO
          </Submit>
        </CardList>
      </div>
    </Container>
  );
}
