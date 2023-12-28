import { useEffect } from 'react';
import { RecContextChanger } from '../../components/RecContextChanger/RecContextChanger';
import { setDYContext } from '../../utils/setDYContext';
import { Root } from './ProductPage.styles';
import { useDyDefaultsContext } from '../../hooks/useDyDefaultsContext';
import { parseContext } from '../../utils/functions';

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
        <div className="dy campaign product" id="product-campaign">
          <p>Insert campaign here</p>
        </div>
      </div>
    </Root>
  );
};
