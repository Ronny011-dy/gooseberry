import { useEffect } from 'react';

import { setDYContext, parseContext } from 'utils';
import { RecommendationContextChanger } from 'components/RecommendationContextChanger';
import { SitePage } from 'components/SitePage';
import { usePersistDyDefaultsStore } from 'store';
import { CampaignSlot } from 'components/CampaignSlot';

export const CategoryPage: React.FC = () => {
  const type = 'CATEGORY';
  const { lng, categoryContext } = usePersistDyDefaultsStore();
  useEffect(() => {
    setDYContext(type, parseContext(categoryContext), lng);
  });

  return (
    <SitePage>
      <RecommendationContextChanger type='CATEGORY' />
      <CampaignSlot
        className='dy campaign category'
        id='category-campaign'
      />
    </SitePage>
  );
};
