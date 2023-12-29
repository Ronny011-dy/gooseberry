import { ChangeEvent, useEffect, useRef, useState } from 'react';
import {
  Root,
  StyledAddToCart,
  StyledAddToCartButton,
} from './CartPage.styles';
import { setDYContext } from '../../utils/setDYContext';
import { TextField } from '@radix-ui/themes';
import { eventAddToCart } from '../../utils/dyEvents';
import { ProductCart } from './components/ProductCart';

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

  const productCartProps = { cartData, setCartData, addProduct };

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
    <Root>
      <div className="dy campaign cart" id="cart-campaign">
        <h4>Cart campaign</h4>
        <p>Insert campaign here</p>
      </div>
      <StyledAddToCart>
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
      <ProductCart {...productCartProps} />
    </Root>
  );
};
