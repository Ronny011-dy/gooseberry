import GooseLogo from '/gooseberry.svg';
import {
  Root,
  StyledDetailsWrapper,
  StyledHeroParagraph,
  StyledLogo,
  StyledReactLink,
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
        <div>
          <h4>Hero Banner</h4>
          <div className="dy campaign homepage banner">
            <StyledHeroParagraph>
              Also called Caped Gooseberry, or Peruvian Groundcherry, the
              gooseberry is both the tastiest berry known to man, and the best
              support front-end eCommerce sandbox
            </StyledHeroParagraph>
          </div>
        </div>
        <div>
          <h4>Web campaign</h4>
          <div className="dy campaign homepage recs">
            <p>Insert campaign here</p>
          </div>
        </div>
        <div className="dy campaign api">
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
          <p>
            Built with{' '}
            <StyledReactLink href="https://react.dev/" target="_blank">
              React
            </StyledReactLink>
          </p>
        </StyledDetailsWrapper>
      </Root>
    );
  }
};

export { HomePage };
