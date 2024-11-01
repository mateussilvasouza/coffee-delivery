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
  PaymentForm,
  PaymentType,
  SubtitleForm,
} from "./style";

export const CheckoutForm = () => {
  const theme = useTheme();
  const { calculateDeliveryPrice } = useCart();
  const { register, setValue, watch } = useFormContext<NewCheckoutFormData>();
  const { fetchAddress, address } = useViaCep();
  const { paymentType: selectedPayment } = watch();
  const handleCepChange = async (event: React.FocusEvent<HTMLInputElement>) => {
    const cep = event.target.value.replace(/\D/g, "");
    if (cep.length === 8) {
      await fetchAddress(cep);
      if (address) {
        setValue("address", address.logradouro);
        setValue("neighborhood", address.bairro);
        setValue("city", address.localidade);
        setValue("state", address.uf);
      }
      calculateDeliveryPrice(cep);
    }
  };

  return (
    <CheckoutInfos id="checkoutInfo">
      <AddressForm>
        <SubtitleForm>
          <MapPinLine size={22} color={theme.colors["yellow-dark"]} />
          <label htmlFor="">
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
            onBlur={handleCepChange}
          />
          <input
            type="text"
            {...register("address")}
            required
            placeholder="Rua"
            readOnly
          />
          <input
            type="text"
            {...register("number")}
            required
            placeholder="Número"
            readOnly
          />
          <input
            type="text"
            {...register("complement")}
            placeholder="Complemento"
            readOnly
          />
          <input
            type="text"
            {...register("neighborhood")}
            required
            placeholder="Bairro"
            readOnly
          />
          <input
            type="text"
            {...register("city")}
            required
            placeholder="Cidade"
            readOnly
          />
          <input
            type="text"
            {...register("state")}
            required
            placeholder="UF"
            readOnly
          />
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
