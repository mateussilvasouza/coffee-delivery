import styled from "styled-components";

export const LayoutContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 74rem;
  min-width: 425px;

  @media (max-width: 1200px) {
    max-width: 90vw;
    margin: 0;
  }
`;
