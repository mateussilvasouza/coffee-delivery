import styled from "styled-components";

export const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50vh;
  gap: 1rem;
  min-width: 425px;

  @media (max-width: 900px) {
    img {
      width: 300px;
    }
  }
  @media (max-width: 767px) {
    display: flex;
    max-width: 100vw;
    height: 30vh;
    margin-top: 3rem;

    img {
      display: none;
    }
  }

  @media (max-width: 425px) {
    margin-top: 5rem;
  }
`;

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 3rem;
  flex-wrap: 1;
  min-width: 425px;
`;

export const HeroContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 425px;

  @media (max-width: 600px) {
    max-width: 100vw;
    padding: 0 1rem;
  }

  h1 {
    color: ${(props) => props.theme.colors["base-title"]};
    font-size: ${(props) => props.theme["font-size"]["title-xl"]};
    font-weight: 900;
  }

  p {
    color: ${(props) => props.theme.colors["base-subtitle"]};
    font-size: ${(props) => props.theme["font-size"]["text-l"]};
  }
`;

export const InfoContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.25rem 0.75rem;
  padding: 0 0.35rem;

  @media (max-width: 48rem) {
    padding: 0 1.2rem;
  }
`;

export const Info = styled.section`
  display: flex;
  align-items: center;
  gap: 1rem;
  span {
    font-size: ${(props) => props.theme["font-size"]["text-m"]};
  }

  svg {
    border-radius: 50%;
  }
`;

export const Catalogo = styled.section`
  min-width: 425px;

  @media (max-width: 1200px) {
    padding: 0 1.2rem;
    margin-top: 3rem;
  }

  @media (max-width: 900px) {
    margin-top: 3rem;
    padding: 0 1.2rem;
  }

  @media (max-width: 600px) {
    margin-top: 6rem;
    padding: 0 1rem;
  }

  @media (max-width: 425px) {
    margin-top: 9rem;
    padding: 0 1rem;
  }

  h2 {
    color: ${(props) => props.theme.colors["base-subtitle"]};
    font-size: ${(props) => props.theme["font-size"]["title-l"]};
    font-weight: 900;
  }
`;
export const CoffeeList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 4rem 0;
  grid-gap: 3rem;

  min-width: 425px;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    min-width: 425px;
  }
`;
