import { Root, StyledLogo, StyledReactLink } from './GooseDetails.styles';
import GooseLogo from '/gooseberry.svg';

export const GooseDetails: React.FC = () => {
  return (
    <Root>
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
    </Root>
  );
};
