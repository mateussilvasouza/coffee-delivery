import styled from "styled-components";

export const CheckoutInfos = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 48rem) {
    width: 100vw;
  }
`;

export const AddressForm = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem;
  border: none;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors["base-card"]};

  div:last-child {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 1rem;

    input {
      padding: 0.8rem;
      color: ${(props) => props.theme.colors["base-label"]};
      font-size: ${(props) => props.theme["font-size"]["text-s"]};
      background-color: ${(props) => props.theme.colors["base-input"]};
      border: 1px solid ${(props) => props.theme.colors["base-button"]};
      border-radius: 0.5rem;
      transition: border 0.3s;
    }
    input:focus {
      color: ${(props) => props.theme.colors["base-text"]};
      border-color: ${(props) => props.theme.colors["yellow-dark"]};
    }
    input:not(:placeholder-shown) {
      color: ${(props) => props.theme.colors["base-text"]};
    }

    input:nth-child(2) {
      grid-row: 2;
      grid-column: 1 / span 5;
    }
    input:nth-child(3),
    input:nth-child(4) {
      grid-row: 3;
    }
    input:nth-child(4) {
      grid-column: 2 / span 4;
    }
    input:nth-child(5),
    input:nth-child(6),
    input:nth-child(7) {
      grid-row: 4;
    }
    input:nth-child(6) {
      grid-column: 2 / span 3;
    }
    input:nth-child(7) {
      width: 4rem;
    }

    @media (max-width: 48rem) and (min-width: 26.6rem) {
      display: flex;
      flex-direction: column;

      input:nth-child(7) {
        width: 100%;
      }
    }

    @media (max-width: 27rem) {
      display: flex;
      flex-direction: column;

      input:nth-child(7) {
        width: 100%;
      }
    }
  }
`;
export const SubtitleForm = styled.div`
  display: flex;
  gap: 0 0.5rem;

  label {
    font-size: ${(props) => props.theme["font-size"]["text-m"]};
    color: ${(props) => props.theme.colors["base-subtitle"]};

    span {
      font-size: ${(props) => props.theme["font-size"]["text-s"]};
      font-weight: 400;
    }
  }
`;
export const PaymentForm = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem;
  border: none;
  background-color: ${(props) => props.theme.colors["base-card"]};
`;

export const PaymentType = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 0;

  @media (max-width: 26.6rem) {
    flex-direction: column;
    align-items: start;
  }

  label {
    display: flex;
    flex: 1;
    align-items: center;
    gap: 0.5rem;
    padding: 0.7rem;
    background-color: ${(props) => props.theme.colors["base-button"]};
    border-radius: 0.5rem;
    cursor: pointer;
    border: 1px solid transparent;
    transition: border 0.3s;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${(props) => props.theme.colors["base-hover"]};
    }
  }
  label.active {
    background-color: ${(props) => props.theme.colors["purple-light"]};
    border: 1px solid ${(props) => props.theme.colors["purple-dark"]};
  }
  input[type="Radio"] {
    display: none;
  }
  span {
    font-size: ${(props) => props.theme["font-size"]["button-m"]};
  }
`;
