import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 100vh;
  height: fit-content;
  background-color: ${(props) => props.theme.colors.bg};
`;
