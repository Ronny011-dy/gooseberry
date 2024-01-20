import { Button } from '@radix-ui/themes';
import styled from 'styled-components';

export const StyledAddToCartButton = styled(Button)``;

export const StyledAddToCart = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
  width: fit-content;
  margin: auto;
  ${StyledAddToCartButton} {
    width: fit-content;
  }
`;
