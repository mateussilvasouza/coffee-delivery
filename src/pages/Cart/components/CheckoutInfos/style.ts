import styled from "styled-components";

export const CheckoutInfos = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-width: 425px;
`;

export const AddressForm = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem;
  border: none;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors["base-card"]};

  @media (max-width: 425px) {
    padding-left: 0;
  }
  div:last-child {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 1rem;

    @media (max-width: 600px) {
      display: flex;
      flex-direction: column;

      input:nth-child(7) {
        width: 100%;
      }
    }

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

export const ErrorMessage = styled.span`
  position: absolute;
  bottom: -1.5rem;
  left: 0;
  background-color: #f8d7da;
  color: #721c24;
  padding: 0.3rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  white-space: nowrap;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  &::before {
    content: "";
    position: absolute;
    top: -5px;
    left: 10px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #f8d7da transparent;
  }
`;
