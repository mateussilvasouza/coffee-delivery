import styled from "styled-components";

export const LayoutContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 74rem;

  @media (max-width: 64rem) {
    max-width: 100vw;
  }

  @media (max-width: 48rem) {
    max-width: 100vw;
  }
`;
