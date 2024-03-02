import { HashRouter } from 'react-router-dom';
import { Theme as RadixUITheme } from '@radix-ui/themes';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

import { SiteRoutes } from './routes';
import { GlobalStyle, Root } from './App.styles';
import { appendScript, getOSPreference } from './utils';
import { usePersistColorModeStore, usePersistDyDefaultsStore } from './store';
import { DY } from './types';

declare global {
  interface Window {
    DY: DY;
  }
}

export const App = () => {
  const { scriptId } = usePersistDyDefaultsStore();
  useEffect(() => {
    appendScript(scriptId, true);
  }, []);
  const queryClient = new QueryClient();
  const { colorModeString, shouldOverride } = usePersistColorModeStore();
  const getAppearance = shouldOverride ? colorModeString : getOSPreference();

  return (
    <HashRouter basename='/'>
      <RadixUITheme
        accentColor='yellow'
        appearance={getAppearance}
        panelBackground='translucent'
        radius='small'
      >
        <Toaster
          position='top-right'
          reverseOrder={false}
        />
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <GlobalStyle />
          <Root>
            <Header />
            <SiteRoutes />
            <Footer />
          </Root>
        </QueryClientProvider>
      </RadixUITheme>
    </HashRouter>
  );
};
