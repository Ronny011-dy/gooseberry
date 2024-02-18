import { Button } from '@radix-ui/themes';

import { Root, StyledBugIcon, StyledLink } from './Footer.styles';

const Footer: React.FC = () => {
  return (
    <Root>
      <StyledLink to={'https://docs.google.com/forms/d/1UdISUcsT456cvHVdajlIt91m5FgTAEaTX47KNenvasg'}>
        <Button variant='outline'>
          <StyledBugIcon />
          Report bug
        </Button>
      </StyledLink>
      <p>{"There's Blueberry, and then there's the tastier berry"}</p>
    </Root>
  );
};

export { Footer };
