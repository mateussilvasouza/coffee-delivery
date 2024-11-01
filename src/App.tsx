import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CartContextProvider } from "./contexts/CartContext";
import { Router } from "./Routes";
import { GlobalStyle } from "./styles/global";
import { defaultThemes } from "./styles/themes/defaultThemes";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultThemes}>
        <CartContextProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
          <GlobalStyle />
        </CartContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
