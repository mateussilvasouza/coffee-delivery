import styled from "styled-components";

interface CartProps {
  amountItems: number;
}
export const HeaderContainer = styled.header<CartProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    div {
      display: flex;
      align-items: center;
      gap: 0.25rem;

      padding: 0.6rem;

      border-radius: 0.37rem;
      background-color: ${(props) => props.theme.colors["purple-light"]};

      span {
        align-self: flex-end;
        color: ${(props) => props.theme.colors["purple-dark"]};
        font-size: ${(props) => props.theme["font-size"]["text-s"]};
      }
    }

    a {
      position: relative;
      display: inline-block;
      padding: 0.4rem;
      color: inherit;
      text-decoration: none;
      border-radius: 0.37rem;
      background-color: ${(props) => props.theme.colors["yellow-light"]};
    }

    a::before {
      content: ${(props) =>
        props.amountItems > 0 ? `"${props.amountItems}"` : '""'};
      position: absolute;
      padding: 0 0.4rem;
      color: ${(props) => props.theme.colors["white"]};
      font-size: ${(props) => props.theme["font-size"]["text-xs"]};
      font-weight: bold;
      border-radius: 50%;
      transform: translate(90%, -80%);
      background-color: ${(props) => props.theme.colors["yellow-dark"]};
    }
  }
`;
