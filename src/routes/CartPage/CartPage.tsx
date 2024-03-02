import { ChangeEvent, useEffect, useRef, useState } from 'react';

import { setDYContext, eventAddToCart } from 'utils';
import { usePersistDyDefaultsStore } from 'store';
import { CampaignSlot } from 'components/CampaignSlot';
import { SitePage } from 'components/SitePage';
import { InputWithButton, InputWithButtonProps } from 'components/InputWithButton';

import { ProductCart } from './components/ProductCart';

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
      <CampaignSlot
        bottomMargin
        className='dy campaign cart'
        id='cart-campaign'
      />
      <InputWithButton {...inputWithButtonParams} />
      <ProductCart {...productCartProps} />
    </SitePage>
  );
};
