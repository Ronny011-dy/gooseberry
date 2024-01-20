import { Button } from '@radix-ui/themes';
import { PlusIcon, MinusIcon } from '@radix-ui/react-icons';

import { eventPurcahse, eventRemoveFromCart } from '../../../../utils';
import {
  Root,
  StyledButton,
  StyledButtonWrapper,
  StyledCard,
  StyledCart,
  StyledProductDiv
} from './ProductCart.styles';

interface Props {
  addProduct: (skuToAdd: string) => void;
  cartData: string[];
  setCartData: React.Dispatch<React.SetStateAction<string[]>>;
}

export const ProductCart: React.FC<Props> = ({ cartData, setCartData, addProduct }) => {
  const removeProduct = (skuToRemove: string) => {
    setCartData((prev) => {
      const lastIndexOfSku = prev.lastIndexOf(skuToRemove);
      if (lastIndexOfSku === -1) return prev;
      return prev.toSpliced(lastIndexOfSku, 1);
    });
    eventRemoveFromCart(skuToRemove, cartData);
  };

  const handlePurchase = () => eventPurcahse(cartData);

  return (
    <Root>
      {cartData.length !== 0 && 'Products in cart'}
      <StyledCart>
        {cartData &&
          [...new Set(cartData)].map((sku, i) => (
            <StyledProductDiv key={i}>
              {sku}
              <StyledCard>{cartData.filter((entry) => entry === sku).length}</StyledCard>
              <StyledButtonWrapper>
                <StyledButton
                  variant='ghost'
                  onClick={() => addProduct(sku)}
                >
                  <PlusIcon />
                </StyledButton>
                <StyledButton
                  variant='ghost'
                  onClick={() => removeProduct(sku)}
                >
                  <MinusIcon />
                </StyledButton>
              </StyledButtonWrapper>
            </StyledProductDiv>
          ))}
      </StyledCart>
      {cartData.length === 0 && 'Cart is empty'}
      {cartData.length !== 0 && (
        <Button
          variant='outline'
          onClick={handlePurchase}
        >
          Purchase
        </Button>
      )}
    </Root>
  );
};
