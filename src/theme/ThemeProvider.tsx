import { useState, useEffect, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { ColorMode, usePersistColorModeStore } from 'store';
import { getOSPreference } from 'utils';

import { lightTheme } from './lightTheme';
import { darkTheme } from './darkTheme';

export type ThemeMode = {
  colors: {
    bg: string;
    bga: string;
    fg: string;
    fga: string;
    primary: string;
  };
};
interface Props {
  children: ReactNode;
}

const themeChooser = (colorMode: ColorMode): ThemeMode => (colorMode === 'dark' ? darkTheme : lightTheme);

export const ThemeProviderWithModes: React.FC<Props> = ({ children }) => {
  const { colorModeString, shouldOverride } = usePersistColorModeStore();
  const themeChoice = themeChooser(shouldOverride ? colorModeString : getOSPreference());
  const [theme, setTheme] = useState(themeChoice);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => !shouldOverride && setTheme(mediaQuery.matches ? darkTheme : lightTheme);

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [shouldOverride]);

  useEffect(() => {
    setTheme(themeChoice);
  }, [shouldOverride, themeChoice]);

  const themeWithExtras = {
    borderRadius: '3px',
    colors: theme.colors,
    constantColors: {
      black: 'rgb(30, 30, 30)',
      secondary: 'rgb(0, 168, 210)',
      white: 'whitesmoke'
    }
  };

  return <ThemeProvider theme={themeWithExtras}>{children}</ThemeProvider>;
};
