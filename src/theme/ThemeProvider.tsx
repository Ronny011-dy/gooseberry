import { useState, useEffect, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './lightTheme';
import { darkTheme } from './darkTheme';
import { getUserColorSchemePreference } from '../utils/functions';

type ThemeProviderWithModesProps = {
  children: ReactNode;
};

export const ThemeProviderWithModes: React.FC<ThemeProviderWithModesProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState(
    getUserColorSchemePreference() === 'dark' ? darkTheme : lightTheme
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () =>
      setTheme(mediaQuery.matches ? darkTheme : lightTheme);

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const themeWithExtras = {
    colors: theme.colors,
    constantColors: {
      secondary: 'rgb(0, 168, 210)',
      white: 'whitesmoke',
      black: 'rgb(30, 30, 30)',
    },
    borderRadius: '5px',
  };

  return <ThemeProvider theme={themeWithExtras}>{children}</ThemeProvider>;
};
