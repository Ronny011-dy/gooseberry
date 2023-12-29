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
    <Root isOverflowing={isOverflowing}>
      <div>
        <h4>Hero Banner</h4>
        <div className="dy campaign homepage banner" id="homepage-banner">
          <StyledHeroParagraph>
            Also called Caped Gooseberry, or Peruvian Groundcherry, the
            gooseberry is both the tastiest berry known to man, and the best
            support front-end eCommerce sandbox
          </StyledHeroParagraph>
        </div>
      </div>
      <div>
        <h4>Web campaign</h4>
        <div className="dy campaign homepage recs" id="homepage-recs">
          <p>Insert campaign here</p>
        </div>
      </div>
      <div className="dy campaign api" id="homepage-api">
        <h4>XP API campaign</h4>
        <Carousel />
      </div>
    </Root>
  );
};

export { HomePage };
