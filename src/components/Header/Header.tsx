import { useMemo } from 'react';
import { useTheme } from 'styled-components';

import { usePersistDyDefaultsStore } from 'store';

import gooseLogo from '/gooseberry.svg';
import gooseLogoLight from '/gooseberry_light.svg';

import {
  Root,
  StyledBadge,
  StyledButton,
  StyledLogoLink,
  StyledLogoWrapper,
  StyledNavigation,
  StyledNavigationLink
} from './Header.styles';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const theme = useTheme();
  const { scriptId } = usePersistDyDefaultsStore();
  const pages = ['category', 'product', 'cart', 'settings'];
  const toCapitalized = (title: string) => `${title[0].toUpperCase()}${title.slice(1)}`;

  const activeConsent = useMemo(() => window?.DYO?.sectionFeatures?.ACTIVE_CONSENT.enabled, [scriptId]);

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
          <StyledButton
            key={index}
            variant='outline'
          >
            <StyledNavigationLink to={`/${page}`}>{toCapitalized(page)}</StyledNavigationLink>
          </StyledButton>
        ))}
      </StyledNavigation>
      {activeConsent && (
        <StyledBadge
          color='green'
          variant='solid'
        >
          Script with Active Consent
        </StyledBadge>
      )}
    </Root>
  );
};

export { Header };
