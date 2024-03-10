import { Goose } from 'assets/Goose';

import { Root, StyledLogo, StyledReactLink } from './GooseDetails.styles';

export const GooseDetails: React.FC = () => {
  return (
    <Root>
      <StyledLogo
        href='https://github.com/DynamicYield/gooseberry'
        target='_blank'
      >
        {/* <img
          src={GooseLogo}
        /> */}
        <Goose />
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
