import { useEffect } from 'react';

import { RecommendationContextChanger } from 'components/RecommendationContextChanger';
import { setDYContext, parseContext } from 'utils';
import { SitePage } from 'components/SitePage';
import { usePersistDyDefaultsStore } from 'store';
import { CampaignSlot } from 'components/CampaignSlot';

export const ProductPage: React.FC = () => {
  const type = 'PRODUCT';
  const { lng, productContext } = usePersistDyDefaultsStore();
  useEffect(() => {
    setDYContext(type, parseContext(productContext), lng);
  });

  return (
    <SitePage>
      <RecommendationContextChanger type='PRODUCT' />
      <CampaignSlot
        className='dy campaign product'
        id='product-campaign'
      />
    </SitePage>
  );
};
