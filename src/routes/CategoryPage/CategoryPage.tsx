import { useEffect } from 'react';

import { setDYContext, parseContext } from '../../utils';
import { RecContextChanger } from '../../components/RecContextChanger/RecContextChanger';
import { useDyDefaultsContext } from '../../hooks/useDyDefaultsContext';
import { SitePage } from '../../components/SitePage';

export const CategoryPage: React.FC = () => {
  const type = 'CATEGORY';

  const { categoryContext } = useDyDefaultsContext();
  useEffect(() => {
    setDYContext(type, parseContext(categoryContext));
  });

  return (
    <SitePage>
      <RecContextChanger type='CATEGORY' />
      <h4>Category campaign</h4>
      <div
        className='dy campaign category'
        id='category-campaign'
      >
        <p>Insert campaign here</p>
      </div>
    </SitePage>
  );
};
