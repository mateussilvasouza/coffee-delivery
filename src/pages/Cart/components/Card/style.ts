import { Trash } from "@phosphor-icons/react";
import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  padding: 0.25rem 0.5rem;

  div {
    display: flex;
    gap: 0 1rem;

    img {
      width: 5rem;
    }
  }
`;

export const Price = styled.span`
  font-size: ${(props) => props.theme["font-size"]["text-m"]};
  font-weight: bold;
`;

export const MainCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  p {
    padding-bottom: 0.5rem;
    font-size: ${(props) => props.theme["font-size"]["text-m"]};
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  padding: 0 0.5rem;

  font-size: ${(props) => props.theme["font-size"]["button-m"]};
  color: ${(props) => props.theme.colors["base-text"]};
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors["base-button"]};
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors["base-hover"]};
  }
`;

export const TrashIcon = styled(Trash)`
  color: ${(props) => props.theme.colors["purple"]};

  &:hover {
    color: ${(props) => props.theme.colors["purple-dark"]};
  }
`;

export const Line = styled.div`
  margin: 1.5rem 0;
  border: 1px solid ${(props) => props.theme.colors["base-button"]};
`;
