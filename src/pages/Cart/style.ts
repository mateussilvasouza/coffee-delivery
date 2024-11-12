import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  div:first-child {
    max-width: 640px;
  }
  div:last-child {
    max-width: 458px;
  }
  h2 {
    color: ${(props) => props.theme.colors["base-subtitle"]};
    font-size: ${(props) => props.theme["font-size"]["title-xs"]};
    font-weight: 700;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    margin: auto;
  }
`;

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem 1.5rem;
  border-radius: 1rem 2rem;
  background-color: ${(props) => props.theme.colors["base-card"]};
  min-width: 425px;

  @media (max-width: 425px) {
    padding: 2.5rem 0;
  }
`;

export const Submit = styled.button`
  align-self: center;
  width: 23rem;
  padding: 0.5rem 1rem;
  font-size: ${(props) => props.theme["font-size"]["button-g"]};
  color: ${(props) => props.theme.colors["white"]};
  line-height: 160%;
  border-radius: 0.35rem;
  background-color: ${(props) => props.theme.colors["yellow"]};
  border: none;
  cursor: pointer;

  @media (max-width: 900px) {
    width: 100%;
    line-height: 200%;
    font-weight: bold;
  }
  &:hover {
    background-color: ${(props) => props.theme.colors["yellow-dark"]};
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  padding: 0 1rem;

  @media (max-width: 425px) {
    padding: 0;
  }
`;

export const PriceInfo = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-size: ${(props) => props.theme["font-size"]["text-s"]};
  }
  &:nth-child(3) {
    p {
      font-size: ${(props) => props.theme["font-size"]["text-l"]};
      color: ${(props) => props.theme.colors["base-subtitle"]};
      font-weight: bold;
    }
  }
  @media (max-width: 425px) {
    width: 90%;
  }
`;
