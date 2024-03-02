import { useEffect } from 'react';

import { Carousel } from 'components/Carousel';
import { setDYContext } from 'utils';
import { SitePage } from 'components/SitePage';
import { usePersistDyDefaultsStore } from 'store';
import { CampaignSlot } from 'components/CampaignSlot';

export const HomePage: React.FC = () => {
  const type = 'HOMEPAGE';
  const { lng } = usePersistDyDefaultsStore();
  useEffect(() => {
    setDYContext(type, undefined, lng);
  });

  return (
    <SitePage>
      <CampaignSlot
        className='dy campaign homepage banner'
        id='homepage-banner'
      />
      <CampaignSlot
        className='dy campaign homepage recs'
        id='homepage-recs'
      />
      <CampaignSlot
        className='dy campaign api'
        id='homepage-api'
        title='XP API recommendations'
      >
        <Carousel />
      </CampaignSlot>
    </SitePage>
  );
};
