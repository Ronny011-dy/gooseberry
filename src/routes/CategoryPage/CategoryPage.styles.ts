import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 86vh;
  height: fit-content;
  margin-top: 10vh;
  gap: 25px;
  color: ${(props) => props.theme.colors.fg};
  text-align: center;
`;
