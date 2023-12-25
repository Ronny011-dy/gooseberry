import { Button } from '@radix-ui/themes';
import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 86vh;
  height: fit-content;
  margin-top: 10vh;
  gap: 25px;
  color: ${(props) => props.theme.colors.fg};
  text-align: center;
`;

export const StyledAddToCartButton = styled(Button)``;

export const StyledAddToCart = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
  ${StyledAddToCartButton} {
    width: fit-content;
  }
`;
