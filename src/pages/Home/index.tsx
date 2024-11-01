import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import DataBase from "../../../data/coffees.json";
import Image from "../../assets/Imagem.png";
import { Card } from "./components/Card";
import {
  Catalogo,
  CoffeeList,
  Hero,
  HeroContainer,
  HeroContent,
  Info,
  InfoContainer,
} from "./style";

export function Home() {
  const theme = useTheme();
  const { coffees } = DataBase;
  return (
    <main>
      <HeroContainer>
        <Hero>
          <HeroContent>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </HeroContent>
          <InfoContainer>
            <Info>
              <ShoppingCart
                size={16}
                color={theme.colors["white"]}
                style={{
                  backgroundColor: theme.colors["yellow-dark"],
                  boxShadow: `0 0 0 6px ${theme.colors["yellow-dark"]}`,
                }}
                weight="fill"
              />
              <span>Compra simples e segura</span>
            </Info>
            <Info>
              <Package
                size={16}
                color={theme.colors["white"]}
                style={{
                  backgroundColor: theme.colors["base-text"],
                  boxShadow: `0 0 0 6px ${theme.colors["base-text"]}`,
                }}
                weight="fill"
              />
              <span>Embalagem mantém o café intacto</span>
            </Info>
            <Info>
              <Timer
                size={16}
                color={theme.colors["white"]}
                style={{
                  backgroundColor: theme.colors["yellow"],

                  boxShadow: `0 0 0 6px ${theme.colors["yellow"]}`,
                }}
                weight="fill"
              />
              <span>Entrega rápida e rastreada</span>
            </Info>
            <Info>
              <Coffee
                size={16}
                color={theme.colors["white"]}
                style={{
                  backgroundColor: theme.colors["purple-dark"],
                  boxShadow: `0 0 0 6px ${theme.colors["purple-dark"]}`,
                }}
                weight="fill"
              />
              <span>O café chega fresquinho até você</span>
            </Info>
          </InfoContainer>
        </Hero>
        <img src={Image} alt="" />
      </HeroContainer>
      <Catalogo>
        <h2>Nossos Cafés</h2>
        <CoffeeList>
          {coffees.map((coffee) => (
            <Card key={coffee.id} coffee={coffee} />
          ))}
        </CoffeeList>
      </Catalogo>
    </main>
  );
}
