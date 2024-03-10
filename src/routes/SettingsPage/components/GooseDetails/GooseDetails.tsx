import { Root, StyledLogo, StyledReactLink } from './GooseDetails.styles';

import GooseLogo from '/gooseberry.svg';

export const GooseDetails: React.FC = () => {
  return (
    <Root>
      <StyledLogo
        href='https://github.com/DynamicYield/gooseberry'
        target='_blank'
      >
        <img
          alt='Vite logo'
          src={GooseLogo}
        />
      </StyledLogo>
      <p>
        Built with{' '}
        <StyledReactLink
          href='https://react.dev/'
          target='_blank'
        >
          React
        </StyledReactLink>
      </p>
    </Root>
  );
};
