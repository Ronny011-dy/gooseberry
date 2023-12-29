import { Root, StyledHeroParagraph } from './HomePage.styles';
import { Carousel } from '../../components/Carousel/Carousel';
import { setDYContext } from '../../utils/setDYContext';
import { useEffect, useRef } from 'react';

const HomePage: React.FC = () => {
  const homepageRef = useRef<HTMLDivElement>(null);
  const type = 'HOMEPAGE';
  useEffect(() => {
    setDYContext(type);
  });
  let isOverflowing = false;
  useEffect(() => {
    if (homepageRef.current) {
      const homepageHeight = homepageRef.current.clientHeight;
      const viewportHeight = window.innerHeight;
      isOverflowing = homepageHeight > 0.9 * viewportHeight;
    }
  }, []);

  return (
    <Root isOverflowing={isOverflowing} ref={homepageRef}>
      <div className="dy campaign homepage banner" id="homepage-banner">
        <h4>Hero Banner</h4>
        <StyledHeroParagraph>
          Also called Caped Gooseberry, or Peruvian Groundcherry, the gooseberry
          is both the tastiest berry known to man, and the best support
          front-end eCommerce sandbox
        </StyledHeroParagraph>
      </div>
      <div className="dy campaign homepage recs" id="homepage-recs">
        <h4>Web campaign</h4>
        <p>Insert campaign here</p>
      </div>
      <div className="dy campaign api" id="homepage-api">
        <h4>XP API campaign</h4>
        <Carousel />
      </div>
    </Root>
  );
};

export { HomePage };
