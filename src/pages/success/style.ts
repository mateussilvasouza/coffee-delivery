import styled from "styled-components";

export const SuccessContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 5rem;

  @media (max-width: 48rem) {
    max-width: 100vw;
    padding: 0 1rem;
  }

  h2 {
    color: ${(props) => props.theme.colors["yellow-dark"]};
    font-size: ${(props) => props.theme["font-size"]["title-l"]};
    font-weight: 900;
  }

  p {
    color: ${(props) => props.theme.colors["base-subtitle"]};
    font-size: ${(props) => props.theme["font-size"]["text-l"]};
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;

  div {
    position: relative;
    padding: 1.5rem;
    border-radius: 0.35rem 2rem;
    background-color: ${(props) => props.theme.colors["background"]};
    max-width: 475px;

    &::before {
      content: "";
      position: absolute;
      top: -1px;
      left: -1px;
      right: -1px;
      bottom: -1px;
      z-index: -1;
      background: linear-gradient(
        45deg,
        ${(props) => props.theme.colors["yellow-dark"]},
        ${(props) => props.theme.colors["purple-dark"]}
      );
      border-radius: 0.35rem 2rem;
    }
  }

  @media (max-width: 48rem) {
    img {
      width: 300px;
    }
  }

  @media (max-width: 27rem) {
    img {
      display: none;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0 2rem;
  p,
  span {
    font-size: ${(props) => props.theme["font-size"]["text-m"]};
  }

  span {
    font-weight: 700;
  }
  svg {
    color: ${(props) => props.theme.colors["white"]};
    border-radius: 50%;
  }
`;

export const PurchaseNotMade = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
