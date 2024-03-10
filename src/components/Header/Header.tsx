import { useMemo } from 'react';

import { usePersistDyDefaultsStore } from 'store';
import { Goose } from 'assets/Goose';

import {
  Root,
  StyledConsentBadge,
  StyledButton,
  StyledLogoLink,
  StyledLogoWrapper,
  StyledNavigation,
  StyledNavigationLink
} from './Header.styles';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
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
        <StyledLogoWrapper>
          <Goose />
        </StyledLogoWrapper>
        <h1>Gooseberry</h1>
      </StyledLogoLink>
      <StyledNavigation>
        {pages.map((page, index) => (
          <StyledNavigationLink
            key={index}
            to={`/${page}`}
          >
            <StyledButton variant='outline'>{toCapitalized(page)}</StyledButton>
          </StyledNavigationLink>
        ))}
      </StyledNavigation>
      {activeConsent && (
        <StyledConsentBadge
          color='green'
          variant='solid'
        >
          Script with Active Consent
        </StyledConsentBadge>
      )}
    </Root>
  );
};

export { Header };
