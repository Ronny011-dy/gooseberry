import gooseLogo from '/gooseberry.svg';
import gooseLogoLight from '/gooseberry_light.svg';
import {
  Root,
  StyledButton,
  StyledLink,
  StyledLogoLink,
  StyledLogoWrapper,
  StyledNavigation,
} from './Header.styles';
import { useTheme } from 'styled-components';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const theme = useTheme();

  return (
    <Root>
      {/* for production the href should be https://ronny011-dy.github.io/gooseberry/ */}
      {/* for dev its just "/" */}
      <StyledLogoLink
        href="https://ronny011-dy.github.io/gooseberry/"
        // href="/"
        target="_self"
      >
        <StyledLogoWrapper variant="outline">
          <img
            src={theme.colors.bg === 'whitesmoke' ? gooseLogoLight : gooseLogo}
          />
        </StyledLogoWrapper>
        <h1>Gooseberry</h1>
      </StyledLogoLink>
      <StyledNavigation>
        <StyledLink to={'/category'}>
          <StyledButton variant="outline">Category</StyledButton>
        </StyledLink>
        <StyledLink to={'/product'}>
          <StyledButton variant="outline">Product</StyledButton>
        </StyledLink>
        <StyledLink to={'/cart'}>
          <StyledButton variant="outline">Cart</StyledButton>
        </StyledLink>
        <StyledLink to={'/settings'}>
          <StyledButton variant="outline">Settings</StyledButton>
        </StyledLink>{' '}
      </StyledNavigation>
    </Root>
  );
};

export { Header };
