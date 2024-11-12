import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
  align-items: center;
  min-width: 256px;
  padding: 0 2rem;
  background-color: ${(props) => props.theme.colors["base-card"]};
  border-radius: 0.37rem 2.25rem;

  > * {
    position: relative;
    bottom: 2rem;
  }

  h2 {
    color: ${(props) => props.theme.colors["base-subtitle"]};
    font-size: ${(props) => props.theme["font-size"]["title-l"]};
    font-weight: 900;
    line-height: calc(${(props) => props.theme["font-size"]["title-l"]} + 30%);
  }

  h5 {
    text-align: center;
    color: ${(props) => props.theme.colors["base-subtitle"]};
    font-size: ${(props) => props.theme["font-size"]["title-s"]};
    font-weight: 700;
    line-height: calc(${(props) => props.theme["font-size"]["title-s"]} + 30%);
  }

  label {
    text-align: center;
    color: ${(props) => props.theme.colors["base-label"]};
    font-size: ${(props) => props.theme["font-size"]["text-s"]};
    line-height: calc(${(props) => props.theme["font-size"]["text-s"]} + 30%);
  }
`;
export const Tags = styled.div`
  display: flex;
  gap: 0.75rem;

  span {
    padding: 4px;
    color: ${(props) => props.theme.colors["yellow-dark"]};
    font-size: ${(props) => props.theme["font-size"]["tag"]};
    font-weight: bold;
    border-radius: 100px;
    background-color: ${(props) => props.theme.colors["yellow-light"]};
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors["yellow-light"]};
  }
`;

export const Control = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 64rem) {
    flex-direction: column;
  }
`;

export const Price = styled.div`
  span:first-child {
    font-size: ${(props) => props.theme["font-size"]["text-s"]};
  }
  span:last-child {
    font-weight: 900;
    font-size: ${(props) => props.theme["font-size"]["title-m"]};
  }
`;

export const Order = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
  background-color: ${(props) => props.theme.colors["purple-dark"]};

  &:hover {
    cursor: pointer;
  }
`;
