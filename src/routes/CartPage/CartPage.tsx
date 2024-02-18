import { ChangeEvent, useEffect, useRef, useState } from 'react';

import { setDYContext, eventAddToCart } from '../../utils';
import { ProductCart } from './components/ProductCart';
import { SitePage } from '../../components/SitePage';
import { usePersistDyDefaultsStore } from '../../store';
import { InputWithButton, InputWithButtonProps } from '../../components/InputWithButton/InputWithButton';

export const CartPage: React.FC = () => {
  const type = 'CART';
  const { lng } = usePersistDyDefaultsStore();
  const [cartData, setCartData] = useState<string[]>([]);
  const [skuToAdd, setSkuToAdd] = useState('');

  useEffect(() => {
    setDYContext(type, cartData, lng);
  }, [cartData]);

  const skuInputRef = useRef<HTMLInputElement>(null);

  const addProduct = (skuToAdd: string) => {
    setCartData((prev) => prev.concat(skuToAdd));
    eventAddToCart(skuToAdd, cartData);
  };

  const productCartProps = { addProduct, cartData, setCartData };

  const onSkuInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSkuToAdd(e.target.value);
  };

  const onAddToCart = () => {
    skuToAdd && addProduct(skuToAdd);
    setSkuToAdd('');
  };

  const onSkuInputKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onAddToCart();
    }
  };

  const inputWithButtonParams: InputWithButtonProps = {
    buttonCallback: onAddToCart,
    buttonLabel: 'Add to cart',
    inputRef: skuInputRef,
    onChange: onSkuInputChange,
    onKeyDown: onSkuInputKeyDown,
    placeholder: 'SKU',
    value: skuToAdd
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
      <InputWithButton {...inputWithButtonParams} />
      <ProductCart {...productCartProps} />
    </SitePage>
  );
};
