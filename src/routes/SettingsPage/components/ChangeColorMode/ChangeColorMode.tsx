import { Checkbox, Switch } from '@radix-ui/themes';

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
      Override color mode
      <Checkbox
        checked={shouldOverride}
        onClick={onCheck}
      />
      <StyledSwitchWrapper>
        Dark
        <Switch
          checked={colorModesBoolean[colorModeString]}
          disabled={!shouldOverride}
          variant='soft'
          onClick={onToggle}
        />
        Light
      </StyledSwitchWrapper>
    </Root>
  );
};
