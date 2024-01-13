import { useState, useEffect, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { lightTheme } from './lightTheme';
import { darkTheme } from './darkTheme';
import { getUserColorSchemePreference } from '../utils/functions';

interface Props {
  children: ReactNode;
}

export const ThemeProviderWithModes: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState(getUserColorSchemePreference() === 'dark' ? darkTheme : lightTheme);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => setTheme(mediaQuery.matches ? darkTheme : lightTheme);

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const themeWithExtras = {
    borderRadius: '5px',
    colors: theme.colors,
    constantColors: {
      black: 'rgb(30, 30, 30)',
      secondary: 'rgb(0, 168, 210)',
      white: 'whitesmoke'
    }
  };

  return <ThemeProvider theme={themeWithExtras}>{children}</ThemeProvider>;
};
