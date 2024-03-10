import { Separator, Switch } from '@radix-ui/themes';
import styled, { css } from 'styled-components';

export const Root = styled.div`
  border: solid 1px ${(props) => props.theme.colors.primary};
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 10px;
  width: fit-content;
  margin: auto;
`;

export const StyledSwitchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

export const StyledSeparator = styled(Separator)`
  background-color: var(--accent-a11);
`;

export const StyledSwitch = styled(Switch)`
  ${(props) =>
    props.theme.colors.bg !== 'whitesmoke' &&
    css`
      border: solid 1px;
      border-color: var(--accent-a11);
    `}
`;
