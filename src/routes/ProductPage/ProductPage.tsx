import { useEffect } from 'react';

import { RecommendationContextChanger } from '../../components/RecommendationContextChanger';
import { setDYContext, parseContext } from '../../utils';
import { SitePage } from '../../components/SitePage';
import { usePersistDyDefaultsStore } from '../../store';

export const ProductPage: React.FC = () => {
  const type = 'PRODUCT';
  const { productContext } = usePersistDyDefaultsStore();
  useEffect(() => {
    setDYContext(type, parseContext(productContext));
  });

  return (
    <SitePage>
      <RecommendationContextChanger type='PRODUCT' />
      <h4>Product campaign</h4>
      <div
        className='dy campaign product'
        id='product-campaign'
      >
        <p>Insert campaign here</p>
      </div>
    </SitePage>
  );
};
