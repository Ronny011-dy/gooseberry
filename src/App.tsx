import { HashRouter, Route, Routes } from 'react-router-dom';
import { Theme as RadixUITheme } from '@radix-ui/themes';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { GlobalStyle, Root } from './App.styles';
import { useDyDefaultsContext } from './hooks/useDyDefaultsContext';
import { appendScript, getOSPreference } from './utils';
import { HomePage, CategoryPage, ProductPage, CartPage, SettingsPage } from './routes';
import { usePersistColorModeStore } from './store';

export const App = () => {
  const { scriptId } = useDyDefaultsContext();
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
          <GlobalStyle />
          <Root>
            <Header />
            <Routes>
              <Route
                element={<HomePage />}
                path='/'
              />
              <Route
                element={<CategoryPage />}
                path='/category'
              />
              <Route
                element={<ProductPage />}
                path='/product'
              />
              <Route
                element={<CartPage />}
                path='/cart'
              />
              <Route
                element={<SettingsPage />}
                path='/settings'
              />
            </Routes>
            <Footer />
          </Root>
        </QueryClientProvider>
      </RadixUITheme>
    </HashRouter>
  );
};
