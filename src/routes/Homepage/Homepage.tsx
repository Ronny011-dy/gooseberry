import GooseLogo from '/gooseberry.svg';
import {
  Root,
  StyledDetailsWrapper,
  StyledHeroBanner,
  StyledLogo,
  StyledReactLink,
  StyledSubtitle,
} from './HomePage.styles';
import { Carousel } from '../../components/Carousel/Carousel';
import { setDYContext } from '../../utils/setDYContext';
import { useEffect } from 'react';

type HomePageProps = {};

const HomePage: React.FC<HomePageProps> = () => {
  const type = 'HOMEPAGE';
  useEffect(() => {
    setDYContext(type);
  });
  return (
    <Root>
      <h3>Home page</h3>
      <StyledHeroBanner>
        <h3>Hero Banner</h3>
        <p id="hero-banner">
          Also called Caped Gooseberry, or Peruvian Groundcherry, the gooseberry
          is both the tastiest berry known to man, and the best support
          front-end eCommerce sandbox
        </p>
      </StyledHeroBanner>
      <div>
        <h3>Web campaign</h3>
        <p id="web-campaign">Replace me with web campaigns</p>
      </div>
      <div>
        <h3>XP API campaign</h3>
        {/* <p id="xp-api">XP API client-side campaign goes here</p> */}
        <Carousel />
      </div>
      <StyledDetailsWrapper id="details-wrapper">
        <StyledLogo
          href="https://ronny011-dy.github.io/gooseberry/"
          target="_blank"
        >
          <img src={GooseLogo} alt="Vite logo" />
        </StyledLogo>
        <StyledSubtitle>
          Built with{' '}
          <StyledReactLink href="https://react.dev/" target="_blank">
            React
          </StyledReactLink>
        </StyledSubtitle>
      </StyledDetailsWrapper>
    </Root>
  );
};

export { HomePage };
