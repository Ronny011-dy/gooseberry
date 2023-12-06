import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 86vh;
  height: fit-content;
  justify-content: center;
  color: ${(props) => props.theme.colors.fg};
`;

export const StyledCategoryChanger = styled.div`
  display: flex;
  gap: 15px;
  input {
    width: 30ch;
    outline: none;
    border: solid 1px ${(props) => props.theme.colors.fg};
    border-radius: ${(props) => props.theme.borderRadius};
  }
  button {
    width: fit-content;
    color: ${(props) => props.theme.colors.bg};
    background-color: ${(props) => props.theme.colors.fg};
    font-weight: bold;
    height: fit-content;
    cursor: pointer;
    padding: 10px;
    border: none;
    border-radius: ${(props) => props.theme.borderRadius};
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
        rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
        rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    }
    &:active {
      transform: translateY(2px);
      box-shadow: none;
    }
  }
`;
