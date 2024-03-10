import { Bug } from 'assets';

import { Root, StyledButton, StyledLink, StyledParagraph } from './Footer.styles';

const Footer: React.FC = () => {
  return (
    <Root>
      <StyledLink to={'https://docs.google.com/forms/d/1UdISUcsT456cvHVdajlIt91m5FgTAEaTX47KNenvasg'}>
        <StyledButton variant='outline'>
          <Bug />
          Report bug
        </StyledButton>
      </StyledLink>
      <StyledParagraph>{"There's Blueberry, and then there's the tastier berry"}</StyledParagraph>
    </Root>
  );
};

export { Footer };
