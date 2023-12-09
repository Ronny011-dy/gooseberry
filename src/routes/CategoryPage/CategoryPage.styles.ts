import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 86vh;
  height: fit-content;
  justify-content: center;
  color: ${(props) => props.theme.colors.fg};
  text-align: center;
`;

export const StyledCategoryChanger = styled.div`
  display: flex;
  gap: 15px;
  input {
    width: 28.5ch;
  }
`;
