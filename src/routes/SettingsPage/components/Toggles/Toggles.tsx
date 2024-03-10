import { Checkbox } from '@radix-ui/themes';
import { CheckIcon, Cross2Icon, MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'styled-components';

import { usePersistColorModeStore } from 'store';
import { usePersistUserConsentStore } from 'store/usePersistUserConsentStore';

import { Root, StyledCheckbox, StyledSeparator, StyledSwitch, StyledSwitchWrapper } from './Toggles.styles';

export const Toggles: React.FC = () => {
  const onCheck = () => {
    toggleShouldOverride();
  };
  const onToggle = () => {
    toggleColorMode();
  };

  const { colorModeString, toggleColorMode, colorModesBoolean, shouldOverride, toggleShouldOverride } =
    usePersistColorModeStore();

  const { userConsent, toggleUserConsent } = usePersistUserConsentStore();

  const theme = useTheme();
  const isDarkTheme = theme.colors.bg !== 'whitesmoke';

  return (
    <Root>
      Override theme
      <StyledCheckbox
        checked={shouldOverride}
        onClick={onCheck}
      />
      <StyledSwitchWrapper>
        <MoonIcon />
        <StyledSwitch
          checked={colorModesBoolean[colorModeString]}
          color='brown'
          disabled={!shouldOverride}
          highContrast={isDarkTheme}
          variant='classic'
          onClick={onToggle}
        />
        <SunIcon />
      </StyledSwitchWrapper>
      <StyledSeparator
        color='amber'
        orientation='vertical'
        size='2'
      />
      Accept consent
      <StyledSwitchWrapper>
        <Cross2Icon />
        <StyledSwitch
          checked={userConsent}
          color='brown'
          highContrast={isDarkTheme}
          variant='classic'
          onClick={() => toggleUserConsent()}
        />
        <CheckIcon />
      </StyledSwitchWrapper>
    </Root>
  );
};
