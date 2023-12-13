import { ChangeEvent, useEffect, useRef, useState } from 'react';
import {
  Root,
  StyledAddToCart,
  StyledAddToCartButton,
  StyledButton,
  StyledButtonWrapper,
  StyledCard,
  StyledCart,
  StyledCartWrapper,
  StyledProductDiv,
} from './CartPage.styles';
import { setDYContext } from '../../utils/setDYContext';
import { PlusIcon, MinusIcon } from '@radix-ui/react-icons';
import { TextField } from '@radix-ui/themes';
import { eventAddToCart } from '../../utils/dyEvents';

type CartPageProps = {};

export const CartPage: React.FC<CartPageProps> = () => {
  const type = 'CART';
  const [cartData, setCartData] = useState<string[]>([]);
  const [skuToAdd, setSKUToAdd] = useState('');

  useEffect(() => {
    setDYContext(type, cartData);
  }, [cartData]);

  const skuInputRef = useRef<HTMLInputElement>(null);

  const addProduct = (skuToAdd: string) => {
    setCartData((prev) => prev.concat(skuToAdd));
    eventAddToCart(skuToAdd, cartData);
  };
  const removeProduct = (skuToRemove: string) => {
    setCartData((prev) => {
      const skuIndex = prev.findLastIndex((sku: string) => sku === skuToRemove);
      if (skuIndex === -1) return prev;
      return [...prev.slice(0, skuIndex), ...prev.slice(skuIndex + 1)];
    });
  };

  const handleSKUInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSKUToAdd(e.target.value);
  };

  const handleAddToCart = () => {
    skuToAdd && addProduct(skuToAdd);
    setSKUToAdd('');
  };

  const handleSKUInputKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddToCart();
      skuInputRef.current?.blur();
    }
  };

  return (
    <Root>
      <h3>Cart page</h3>
      <div>
        <h3>Cart campaign</h3>
        <p id="cart-campaign">Insert campaign here</p>
      </div>
      <StyledAddToCart>
        Add to cart
        <TextField.Input
          placeholder="SKU"
          value={skuToAdd}
          ref={skuInputRef}
          onChange={handleSKUInputChange}
          onKeyDown={handleSKUInputKeyDown}
        />
        <StyledAddToCartButton variant="outline" onClick={handleAddToCart}>
          Add to cart
        </StyledAddToCartButton>
      </StyledAddToCart>
      <StyledCartWrapper>
        {cartData.length !== 0 && 'Products in cart'}
        <StyledCart>
          {cartData &&
            [...new Set(cartData)].map((sku, i) => (
              <StyledProductDiv key={i}>
                {sku}
                <StyledCard>
                  {cartData.filter((entry) => entry === sku).length}
                </StyledCard>
                <StyledButtonWrapper>
                  <StyledButton variant="ghost" onClick={() => addProduct(sku)}>
                    <PlusIcon />
                  </StyledButton>
                  <StyledButton
                    variant="ghost"
                    onClick={() => removeProduct(sku)}
                  >
                    <MinusIcon />
                  </StyledButton>
                </StyledButtonWrapper>
              </StyledProductDiv>
            ))}
        </StyledCart>
        {cartData.length === 0 && 'Cart is empty'}
      </StyledCartWrapper>
    </Root>
  );
};
