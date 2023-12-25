import { useEffect } from 'react';
import { RecContextChanger } from '../../components/RecContextChanger/RecContextChanger';
import { setDYContext } from '../../utils/setDYContext';
import { Root } from './ProductPage.styles';
import { parseContext } from '../../utils/funcs.util';
import { useDyDefaultsContext } from '../../hooks/useDyDefaultsContext';

type ProductPageProps = {};

export const ProductPage: React.FC<ProductPageProps> = () => {
  const type = 'PRODUCT';
  const { productContext } = useDyDefaultsContext();
  useEffect(() => {
    setDYContext(type, parseContext(productContext));
  });

  return (
    <Root>
      <RecContextChanger type="PRODUCT" />
      <div>
        <h4>Product campaign</h4>
        <div id="product-campaign">
          <p>Insert campaign here</p>
        </div>
      </div>
    </Root>
  );
};
