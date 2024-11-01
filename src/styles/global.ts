import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    opacity: 1;
  }

  h1, h2, h3, h4, h5, h6{
    font-family: "Baloo 2";
    line-height: 130%;
  }

  body{
    background: ${(props) => props.theme.colors["background"]};
    color: ${(props) => props.theme.colors["base-text"]}
  }

  body, p, span, input, textarea, button{
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
  }
  input {
    outline: none; /* Remove o contorno padrão do navegador */
  }
`;
