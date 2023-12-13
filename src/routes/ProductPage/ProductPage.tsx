import { useEffect } from 'react';
import { ContextChanger } from '../../components/ContextChanger/ContextChanger';
import { setDYContext } from '../../utils/setDYContext';
import { Root } from './ProductPage.styles';
import {
  SlotCard,
  SlotCardProps,
} from '../../components/Carousel/components/SlotCard/SlotCard';

type ProductPageProps = {};

export const ProductPage: React.FC<ProductPageProps> = () => {
  const type = 'PRODUCT';
  const data = ['3853'];
  useEffect(() => {
    setDYContext(type, data);
  });

  let productProperties = {} as SlotCardProps;

  try {
    //should not show warnings in production
    ({
      name: productProperties.name,
      image_url: productProperties.image_url,
      price: productProperties.price,
    } = (window as any)?.DY?.feedProperties);
  } catch (error) {
    console.warn('Properties were not found:', error);
    productProperties.name = 'No product';
    productProperties.price = '0';
  }

  return (
    <Root>
      <h3>Product page</h3>
      <SlotCard {...(productProperties as SlotCardProps)} />
      <ContextChanger type="PRODUCT" />
      <div>
        <h3>Product campaign</h3>
        <p id="product-campaign">Insert campaign here</p>
      </div>
    </Root>
  );
};
