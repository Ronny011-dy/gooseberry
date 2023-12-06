import GooseLogo from '/gooseberry.svg';
import { useDY } from '../../hooks/useDY';
import {
  Root,
  StyledHeroBanner,
  StyledLogo,
  StyledReactLink,
  StyledSubtitle,
} from './Homepage.styles';

type HomepageProps = {};

const Homepage: React.FC<HomepageProps> = () => {
  useDY('HOMEPAGE');
  return (
    <Root>
      <StyledHeroBanner id="hero-banner">
        <h3>Hero Banner</h3>
        <p>
          Also called Caped Gooseberry, or Peruvian Groundcherry, the gooseberry
          is both the tastiest berry known to man, and the best support
          front-end eCommerce sandbox
        </p>
      </StyledHeroBanner>
      <div id="web-campaigns">
        <h3>Web campaign</h3>
        <p>Replace me with web campaigns</p>
      </div>
      <div id="xp-api">
        <h3>XP API campaign</h3>
        <p>XP API client-side campaign goes here</p>
      </div>
      <div id="details-wrapper">
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
      </div>
    </Root>
  );
};

export { Homepage };
