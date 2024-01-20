import { useEffect } from 'react';

import { RecContextChanger } from '../../components/RecContextChanger/RecContextChanger';
import { setDYContext } from '../../utils/setDYContext';
import { useDyDefaultsContext } from '../../hooks/useDyDefaultsContext';
import { parseContext } from '../../utils/functions';
import { SitePage } from '../../components/SitePage';

export const ProductPage: React.FC = () => {
  const type = 'PRODUCT';
  const { productContext } = useDyDefaultsContext();
  useEffect(() => {
    setDYContext(type, parseContext(productContext));
  });

  return (
    <SitePage>
      <RecContextChanger type='PRODUCT' />
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
