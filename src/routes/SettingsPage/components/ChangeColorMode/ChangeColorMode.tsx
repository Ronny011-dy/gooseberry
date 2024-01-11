import { Checkbox, Switch } from '@radix-ui/themes';
import { Root, StyledSwitchWrapper } from './ChangeColorMode.styles';
import { useLocalStorage } from '../../../../hooks/useLocalStorage';

export const ChangeColorMode: React.FC = () => {
  const [themeLocalStorage, setThemeLocalStorage] = useLocalStorage(
    'themePreference',
    'dark'
  );
  const [overrideLocalStorage, setOverrideLocalStorage] = useLocalStorage(
    'gooseberry_theme_override',
    false
  );
  const onCheck = () => {
    setOverrideLocalStorage((prev) => !prev);
    !overrideLocalStorage && setThemeLocalStorage('dark');
    overrideLocalStorage && window.localStorage.removeItem('themePreference');
    location.reload(); // super dirty implementation instead of using a setting in context wrapper
    // this forces rerender of App(radixUI theme) and styled components themeProvider
  };
  const onToggle = () => {
    setThemeLocalStorage(themeLocalStorage === 'dark' ? 'light' : 'dark');
    location.reload(); // same
  };
  return (
    <Root>
      Override color mode
      <Checkbox onClick={onCheck} checked={overrideLocalStorage} />
      <StyledSwitchWrapper>
        Dark
        <Switch
          variant="soft"
          disabled={!overrideLocalStorage}
          onClick={onToggle}
          checked={themeLocalStorage !== 'dark'}
        />
        Light
      </StyledSwitchWrapper>
    </Root>
  );
};
