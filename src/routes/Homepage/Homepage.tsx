import { useEffect } from 'react';

import { Carousel } from '../../components/Carousel/Carousel';
import { setDYContext } from '../../utils/setDYContext';
import { Root } from './Homepage.styles';

const HomePage: React.FC = () => {
  const type = 'HOMEPAGE';
  useEffect(() => {
    setDYContext(type);
  });

  return (
    <Root>
      <h4>Hero Banner</h4>
      <div
        className='dy campaign homepage banner'
        id='homepage-banner'
      >
        <p>
          Also called Caped Gooseberry, or Peruvian Groundcherry, the gooseberry is both the tastiest berry known to
          man, and the best support front-end eCommerce sandbox
        </p>
      </div>
      <h4>Web campaign</h4>
      <div
        className='dy campaign homepage recs'
        id='homepage-recs'
      >
        <p>Insert campaign here</p>
      </div>
      <h4>XP API campaign</h4>
      <div
        className='dy campaign api'
        id='homepage-api'
      >
        <Carousel />
      </div>
    </Root>
  );
};

export { HomePage };
