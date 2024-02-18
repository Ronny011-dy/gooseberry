import { Button } from '@radix-ui/themes';
import styled from 'styled-components';

export const StyledButton = styled(Button)``;

export const StyledTitle = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  margin: auto;
  gap: 15px;
  align-items: center;
  ${StyledButton} {
    height: fit-content;
    padding: 3px;
  }
`;
