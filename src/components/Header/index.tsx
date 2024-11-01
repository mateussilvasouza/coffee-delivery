import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { useTheme } from "styled-components";
import Logo from "../../assets/Logo.png";
import { useCart } from "../../hooks/useCart";
import { useGeolocation } from "../../hooks/useGeolocation";
import { HeaderContainer } from "./style";
export function Header() {
  const theme = useTheme();
  const { amountItems } = useCart();
  const { address } = useGeolocation();
  return (
    <HeaderContainer amountItems={amountItems}>
      <Link to="/">
        <img
          src={Logo}
          alt="Coffee Delivery"
          aria-label="Coffee Delivery"
          style={{ width: "84px" }}
        />
      </Link>
      <div>
        <div>
          <MapPin size={22} color={theme.colors["purple"]} weight="fill" />
          {address ? (
            <span>
              {address.city}, {address.state}
            </span>
          ) : (
            ""
          )}
        </div>
        <Link to="/cart">
          <ShoppingCart
            size={22}
            weight="fill"
            color={theme.colors["yellow-dark"]}
          />
        </Link>
      </div>
    </HeaderContainer>
  );
}
