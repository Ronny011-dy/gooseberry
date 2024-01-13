import { HashRouter, Route, Routes } from 'react-router-dom';
import { Theme as RadixUITheme } from '@radix-ui/themes';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { GlobalStyle, Root } from './App.styles';
import { useDyDefaultsContext } from './hooks/useDyDefaultsContext';
import { appendScript, getUserColorSchemePreference } from './utils/functions';
import { CategoryPage } from './routes/CategoryPage/CategoryPage';
import { ProductPage } from './routes/ProductPage/ProductPage';
import { CartPage } from './routes/CartPage/CartPage';
import { SettingsPage } from './routes/SettingsPage/SettingsPage';
import { HomePage } from './routes/Homepage/Homepage';

export const App = () => {
  const { scriptId } = useDyDefaultsContext();
  useEffect(() => {
    appendScript(scriptId);
  }, []);
  const queryClient = new QueryClient();
  return (
    <HashRouter basename='/'>
      <RadixUITheme
        accentColor='yellow'
        appearance={getUserColorSchemePreference()}
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
