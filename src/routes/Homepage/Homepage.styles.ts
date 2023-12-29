import styled from 'styled-components';

export const Root = styled.div`
  margin-top: 10vh;
  min-height: 90vh;
  height: fit-content;
  gap: 25px;
  padding-bottom: 15vh;
  color: ${(props) => props.theme.colors.fg};
  text-align: center;
`;
