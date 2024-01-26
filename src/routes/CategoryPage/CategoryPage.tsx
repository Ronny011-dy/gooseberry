import { useEffect } from 'react';

import { setDYContext, parseContext } from '../../utils';
import { RecommendationContextChanger } from '../../components/RecommendationContextChanger';
import { SitePage } from '../../components/SitePage';
import { usePersistDyDefaultsStore } from '../../store';

export const CategoryPage: React.FC = () => {
  const type = 'CATEGORY';
  const { lng, categoryContext } = usePersistDyDefaultsStore();
  useEffect(() => {
    setDYContext(type, parseContext(categoryContext), lng);
  });

  return (
    <SitePage>
      <RecommendationContextChanger type='CATEGORY' />
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
