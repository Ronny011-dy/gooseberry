import { Root, StyledButton, StyledLink } from './Footer.styles';
import { LinkBreak2Icon } from '@radix-ui/react-icons';

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <Root>
      <StyledLink
        to={
          'https://docs.google.com/forms/d/1UdISUcsT456cvHVdajlIt91m5FgTAEaTX47KNenvasg'
        }
      >
        <StyledButton variant="outline">
          <LinkBreak2Icon />
          Report bug
        </StyledButton>
      </StyledLink>
      <p>There's Blueberry, and then there's the tastier berry</p>
    </Root>
  );
};

export { Footer };
