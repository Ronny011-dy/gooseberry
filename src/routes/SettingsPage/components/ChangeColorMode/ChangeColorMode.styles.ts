import styled from 'styled-components';

export const Root = styled.div`
  border: solid 1px ${(props) => props.theme.colors.primary};
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
`;

export const StyledSwitchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;
