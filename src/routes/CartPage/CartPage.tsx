import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { TextField } from '@radix-ui/themes';

import { StyledAddToCart, StyledAddToCartButton } from './CartPage.styles';
import { setDYContext, eventAddToCart } from '../../utils';
import { ProductCart } from './components/ProductCart';
import { SitePage } from '../../components/SitePage';
import { usePersistDyDefaultsStore } from '../../store';

export const CartPage: React.FC = () => {
  const type = 'CART';
  const { lng } = usePersistDyDefaultsStore();
  const [cartData, setCartData] = useState<string[]>([]);
  const [skuToAdd, setSKUToAdd] = useState('');

  useEffect(() => {
    setDYContext(type, cartData, lng);
  }, [cartData]);

  const skuInputRef = useRef<HTMLInputElement>(null);

  const addProduct = (skuToAdd: string) => {
    setCartData((prev) => prev.concat(skuToAdd));
    eventAddToCart(skuToAdd, cartData);
  };

  const productCartProps = { addProduct, cartData, setCartData };

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
    }
  };

  return (
    <SitePage>
      <h4>Cart campaign</h4>
      <div
        className='dy campaign cart'
        id='cart-campaign'
      >
        <p>Insert campaign here</p>
      </div>
      <StyledAddToCart>
        <TextField.Input
          placeholder='SKU'
          ref={skuInputRef}
          value={skuToAdd}
          onChange={handleSKUInputChange}
          onKeyDown={handleSKUInputKeyDown}
        />
        <StyledAddToCartButton
          variant='outline'
          onClick={handleAddToCart}
        >
          Add to cart
        </StyledAddToCartButton>
      </StyledAddToCart>
      <ProductCart {...productCartProps} />
    </SitePage>
  );
};
