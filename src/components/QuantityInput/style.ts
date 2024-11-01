import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors["base-button"]};
  border-radius: 5px;

  button {
    padding: 5px 10px;
    border-radius: 5px;
    background-color: inherit;
    border: none;
    cursor: pointer;

    svg {
      color: ${(props) => props.theme.colors["purple"]};
    }
    &:hover {
      svg {
        color: ${(props) => props.theme.colors["purple-dark"]};
      }
    }
  }

  span {
    color: ${(props) => props.theme.colors["base-title"]};
    font-size: ${(props) => props.theme["font-size"]["text-m"]};
  }
`;
