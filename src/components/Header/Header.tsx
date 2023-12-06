import GooseLogo from '/gooseberry.svg';
import {
  Root,
  StyledLogoLink,
  StyledLogoWrapper,
  StyledNavigation,
} from './Header.styles';
import { Link } from 'react-router-dom';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <Root>
      <StyledLogoLink href="/" target="_self">
        <StyledLogoWrapper>
          <img src={GooseLogo} />
        </StyledLogoWrapper>
        <h1>Gooseberry</h1>
      </StyledLogoLink>
      <StyledNavigation>
        <Link to={'/gooseberry/category'}>
          <button>Category</button>
        </Link>
        <button>PDP</button>
        <button>Cart</button>
        <button>Settings</button>
      </StyledNavigation>
    </Root>
  );
};

export { Header };
