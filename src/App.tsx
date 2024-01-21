import { HashRouter } from 'react-router-dom';
import { Theme as RadixUITheme } from '@radix-ui/themes';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { GlobalStyle, Root } from './App.styles';
import { appendScript, getOSPreference } from './utils';
import { SiteRoutes } from './routes';
import { usePersistColorModeStore, usePersistDyDefaultsStore } from './store';

export const App = () => {
  const { scriptId } = usePersistDyDefaultsStore();
  useEffect(() => {
    appendScript(scriptId);
  }, []);
  const queryClient = new QueryClient();
  const { colorModeString, shouldOverride } = usePersistColorModeStore();

  return (
    <HashRouter basename='/'>
      <RadixUITheme
        accentColor='yellow'
        appearance={shouldOverride ? colorModeString : getOSPreference()}
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
