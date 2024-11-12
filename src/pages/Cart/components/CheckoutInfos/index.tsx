import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "@phosphor-icons/react";
import { useFormContext } from "react-hook-form";
import { useTheme } from "styled-components";
import { NewCheckoutFormData } from "../..";
import { PaymentTypes } from "../../../../contexts/CartContext";
import { useCart } from "../../../../hooks/useCart";
import { useViaCep } from "../../../../hooks/useCep";
import {
  AddressForm,
  CheckoutInfos,
  ErrorMessage,
  PaymentForm,
  PaymentType,
  SubtitleForm,
} from "./style";

export const CheckoutForm = () => {
  const theme = useTheme();
  const { calculateDeliveryPrice } = useCart();
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<NewCheckoutFormData>();
  const { fetchAddress, error } = useViaCep();
  const { paymentType: selectedPayment } = watch();

  const handleCepChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const cep = event.target.value.replace(/\D/g, "");
    if (cep.length === 8) {
      const address = await fetchAddress(cep);
      if (!!address) {
        setValue("address", address.logradouro);
        setValue("neighborhood", address.bairro);
        setValue("city", address.localidade);
        setValue("state", address.uf);
        calculateDeliveryPrice(cep);
      }
      if (!!error) {
        setValue("address", "");
        setValue("neighborhood", "");
        setValue("city", "");
        setValue("state", "");
      }
    }
  };
  console.log(errors);
  return (
    <CheckoutInfos id="checkoutInfo">
      <AddressForm>
        <SubtitleForm>
          <MapPinLine size={22} color={theme.colors["yellow-dark"]} />
          <label>
            Endereço de Entrega
            <br />
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </label>
        </SubtitleForm>
        <div>
          <input
            type="text"
            {...register("cep")}
            required
            placeholder="CEP"
            onChange={handleCepChange}
          />
          {errors.cep && <ErrorMessage>{errors.cep.message}</ErrorMessage>}

          <input
            type="text"
            {...register("address")}
            required
            placeholder="Rua"
          />
          {errors.address && (
            <ErrorMessage>{errors.address.message}</ErrorMessage>
          )}

          <input
            type="text"
            {...register("number")}
            required
            placeholder="Número"
          />
          {errors.number && (
            <ErrorMessage>{errors.number.message}</ErrorMessage>
          )}

          <input
            type="text"
            {...register("complement")}
            placeholder="Complemento"
          />
          {errors.complement && (
            <ErrorMessage>{errors.complement.message}</ErrorMessage>
          )}

          <input
            type="text"
            {...register("neighborhood")}
            required
            placeholder="Bairro"
          />
          {errors.neighborhood && (
            <ErrorMessage>{errors.neighborhood.message}</ErrorMessage>
          )}

          <input
            type="text"
            {...register("city")}
            required
            placeholder="Cidade"
          />
          {errors.city && <ErrorMessage>{errors.city.message}</ErrorMessage>}

          <input type="text" {...register("state")} required placeholder="UF" />
          {errors.state && <ErrorMessage>{errors.state.message}</ErrorMessage>}
        </div>
      </AddressForm>
      <PaymentForm>
        <SubtitleForm>
          <CurrencyDollar size={22} color={theme.colors["purple-dark"]} />
          <label htmlFor="">
            Pagamento
            <br />
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </label>
        </SubtitleForm>
        <PaymentType>
          {["credit", "debit", "money"].map((paymentType) => (
            <label
              key={paymentType}
              className={selectedPayment === paymentType ? "active" : ""}
            >
              {paymentType === "credit" && (
                <CreditCard size={22} color={theme.colors["purple-dark"]} />
              )}
              {paymentType === "debit" && (
                <Bank size={22} color={theme.colors["purple-dark"]} />
              )}
              {paymentType === "money" && (
                <Money size={22} color={theme.colors["purple-dark"]} />
              )}
              <input
                type="radio"
                value={selectedPayment}
                checked={selectedPayment === paymentType}
                onChange={() =>
                  setValue("paymentType", paymentType as PaymentTypes)
                }
              />
              {errors.paymentType && (
                <ErrorMessage>{errors.paymentType.message}</ErrorMessage>
              )}

              <span>
                {paymentType === "credit"
                  ? "CARTÃO DE CRÉDITO"
                  : paymentType === "debit"
                  ? "CARTÃO DE DÉBITO"
                  : "DINHEIRO"}
              </span>
            </label>
          ))}
        </PaymentType>
      </PaymentForm>
    </CheckoutInfos>
  );
};
