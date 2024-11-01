import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import Illustration from "../../assets/Illustration.png";
import { useCart } from "../../hooks/useCart";
import {
  Info,
  InfoContainer,
  PurchaseNotMade,
  SuccessContainer,
} from "./style";

export function Success() {
  const { purchaseMade } = useCart();
  const theme = useTheme();
  return (
    <SuccessContainer>
      {!purchaseMade ? (
        <PurchaseNotMade>
          <h2>Você ainda não realizou nenhum pedido</h2>
          <p>Não perca tempo e experimente um de nossos deliciosos cafés</p>
          <InfoContainer>
            <img src={Illustration} alt="" />
          </InfoContainer>
        </PurchaseNotMade>
      ) : (
        <>
          <h2>Uhu! Pedido confirmado</h2>
          <p>Agora é só aguardar e logo o café chegará até você</p>

          <InfoContainer>
            <div>
              <Info>
                <MapPin
                  size={22}
                  weight="fill"
                  style={{
                    backgroundColor: theme.colors["purple-dark"],
                    boxShadow: `0 0 0 6px ${theme.colors["purple-dark"]}`,
                  }}
                />
                <p>
                  Entrega em{" "}
                  <span>{`${purchaseMade.address}, ${purchaseMade.number} - ${
                    purchaseMade.complement ? purchaseMade.complement : ""
                  } ${purchaseMade.neighborhood} - ${purchaseMade.city}, ${
                    purchaseMade.state
                  }`}</span>
                </p>
              </Info>
              <Info>
                <Timer
                  size={22}
                  weight="fill"
                  style={{
                    backgroundColor: theme.colors["yellow"],
                    boxShadow: `0 0 0 6px ${theme.colors["yellow"]}`,
                  }}
                />
                <p>
                  Previsão de Entrega <span>20 min - 30 min</span>
                </p>
              </Info>
              <Info>
                <CurrencyDollar
                  size={22}
                  weight="fill"
                  style={{
                    backgroundColor: theme.colors["yellow-dark"],
                    boxShadow: `0 0 0 6px ${theme.colors["yellow-dark"]}`,
                  }}
                />
                <p>
                  Pagamento na entrega{" "}
                  <span>
                    {purchaseMade.paymentType === "credit"
                      ? "Cartão de Crédito"
                      : purchaseMade.paymentType === "debit"
                      ? "Cartão de Débito"
                      : "Dinheiro"}
                  </span>
                </p>
              </Info>
            </div>
            <img src={Illustration} alt="" />
          </InfoContainer>
        </>
      )}
    </SuccessContainer>
  );
}
