import { Checkbox, Switch } from '@radix-ui/themes';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

import { Root, StyledSwitchWrapper } from './ChangeColorMode.styles';
import { usePersistColorModeStore } from '../../../../store';

export const ChangeColorMode: React.FC = () => {
  const onCheck = () => {
    toggleShouldOverride();
  };
  const onToggle = () => {
    toggleColorMode();
  };

  const { colorModeString, toggleColorMode, colorModesBoolean, shouldOverride, toggleShouldOverride } =
    usePersistColorModeStore();

  return (
    <Root>
      Override theme
      <Checkbox
        checked={shouldOverride}
        color='amber'
        onClick={onCheck}
      />
      <StyledSwitchWrapper>
        <MoonIcon />
        <Switch
          checked={colorModesBoolean[colorModeString]}
          color='amber'
          disabled={!shouldOverride}
          variant='classic'
          onClick={onToggle}
        />
        <SunIcon />
      </StyledSwitchWrapper>
    </Root>
  );
};
