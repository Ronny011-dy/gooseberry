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
import { useQuery } from '@tanstack/react-query';
import { chooseVariation } from '../../api/api.funcs';

const HomePage: React.FC = () => {
  const type = 'HOMEPAGE';
  useEffect(() => {
    setDYContext(type);
  });
  let productsArr = [];
  // the typescript Jiujitsu needed to replace 'any' with an actual type is not worth it for now
  const { status, data, error } = useQuery<any>({
    queryKey: ['slots'],
    queryFn: chooseVariation,
  });
  if (status === 'error') return <div>{error.message}</div>;
  if (status === 'success') {
    productsArr = data.choices[0].variations[0].payload.data.slots;
    return (
      <Root>
        <StyledHeroBanner>
          <h4>Hero Banner</h4>
          <div id="hero-banner">
            <p>
              Also called Caped Gooseberry, or Peruvian Groundcherry, the
              gooseberry is both the tastiest berry known to man, and the best
              support front-end eCommerce sandbox
            </p>
          </div>
        </StyledHeroBanner>
        <div>
          <h4>Web campaign</h4>
          <div id="web-campaign">
            <p>Insert campaign here</p>
          </div>
        </div>
        <div>
          <h4>XP API campaign</h4>
          <Carousel {...productsArr} />
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
  }
};

export { HomePage };
