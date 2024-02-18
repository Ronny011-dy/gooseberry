import { useTheme } from 'styled-components';
import { Link } from 'react-router-dom';

import gooseLogo from '/gooseberry.svg';
import gooseLogoLight from '/gooseberry_light.svg';

import { Root, StyledButton, StyledLogoLink, StyledLogoWrapper, StyledNavigation } from './Header.styles';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const theme = useTheme();
  const pages = ['category', 'product', 'cart', 'settings'];

  return (
    <Root>
      <StyledLogoLink
        target='_self'
        to='/'
      >
        <StyledLogoWrapper variant='outline'>
          <img src={theme.colors.bg === 'whitesmoke' ? gooseLogoLight : gooseLogo} />
        </StyledLogoWrapper>
        <h1>Gooseberry</h1>
      </StyledLogoLink>
      <StyledNavigation>
        {pages.map((page, index) => (
          <Link
            key={index}
            to={`/${page}`}
          >
            <StyledButton variant='outline'>{`${page[0].toUpperCase()}${page.slice(1)}`}</StyledButton>
          </Link>
        ))}
      </StyledNavigation>
    </Root>
  );
};

export { Header };
