import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
.dy.campaign{
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  z-index: 10;
}`;

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: fit-content;
  background-color: ${(props) => props.theme.colors.bg};
`;
