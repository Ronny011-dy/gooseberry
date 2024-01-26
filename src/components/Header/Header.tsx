import { useTheme } from 'styled-components';

import gooseLogo from '/gooseberry.svg';
import gooseLogoLight from '/gooseberry_light.svg';

import { Root, StyledButton, StyledLink, StyledLogoLink, StyledLogoWrapper, StyledNavigation } from './Header.styles';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const theme = useTheme();

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
        <StyledLink to={'/category'}>
          <StyledButton variant='outline'>Category</StyledButton>
        </StyledLink>
        <StyledLink to={'/product'}>
          <StyledButton variant='outline'>Product</StyledButton>
        </StyledLink>
        <StyledLink to={'/cart'}>
          <StyledButton variant='outline'>Cart</StyledButton>
        </StyledLink>
        <StyledLink to={'/settings'}>
          <StyledButton variant='outline'>Settings</StyledButton>
        </StyledLink>{' '}
      </StyledNavigation>
    </Root>
  );
};

export { Header };
