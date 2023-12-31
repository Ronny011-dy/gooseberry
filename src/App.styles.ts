import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
.dy.campaign{
  max-width: 50vw;
  margin-left: auto;
  margin-right: auto;
  color: ${(props) => props.theme.colors.fg} !important;
  z-index: 10;
}`;

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 100vh;
  height: fit-content;
  background-color: ${(props) => props.theme.colors.bg};
`;
