import styled from 'styled-components';

export const Root = styled.div`
  min-height: 70vh;
  max-width: 1440px;
  margin: auto;
  height: fit-content;
  flex: 1;
  padding-top: 15vh;
  padding-bottom: 15vh;
  color: ${(props) => props.theme.colors.fg};
  text-align: center;
`;
