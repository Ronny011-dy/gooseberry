import { Button } from '@radix-ui/themes';
import styled from 'styled-components';

export const StyledButton = styled(Button)`
  height: fit-content;
  padding: 3px;
  svg {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const StyledTitle = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  margin: auto;
  gap: 15px;
  align-items: center;
`;
