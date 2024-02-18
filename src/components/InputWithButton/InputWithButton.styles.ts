import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
`;

export const StyledInput = styled.input`
  height: 31px;
  font-size: var(--font-size-2);
  letter-spacing: var(--letter-spacing-2);
  border-radius: 3px;
  outline: none;
  --text-field-border-width: 1px;
  color: var(--gray-12);
  text-indent: calc(var(--space-2) - 1px);
  display: block;
  box-sizing: border-box;
  padding: 0;
  padding-bottom: 0.5px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  font-family: inherit;
  background-color: ${(props) => (props.theme.colors.bg === 'whitesmoke' ? 'white' : 'whitesmoke')};
  position: relative;
  border: 1px solid ${(props) => props.theme.colors.fga};
  display: block;
  box-sizing: border-box;
  z-index: 1;
  &:focus {
    border: 1px solid var(--accent-8);
  }
`;
