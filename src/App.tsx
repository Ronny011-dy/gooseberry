import { HashRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { GlobalStyle, Root } from './App.styles';
import { Theme as RadixUITheme } from '@radix-ui/themes';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { useDyDefaultsContext } from './hooks/useDyDefaultsContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { appendScript, getUserColorSchemePreference } from './utils/functions';
import { HomePage } from './routes/HomePage/HomePage';
import { CategoryPage } from './routes/CategoryPage/CategoryPage';
import { ProductPage } from './routes/ProductPage/ProductPage';
import { CartPage } from './routes/CartPage/CartPage';
import { SettingsPage } from './routes/SettingsPage/SettingsPage';

export const App = () => {
  const { scriptId } = useDyDefaultsContext();
  useEffect(() => {
    appendScript(scriptId);
  }, []);
  const queryClient = new QueryClient();
  return (
    <HashRouter basename="/">
      <RadixUITheme
        appearance={getUserColorSchemePreference()}
        radius="small"
        panelBackground="translucent"
        accentColor="yellow"
      >
        <Toaster position="top-right" reverseOrder={false} />
        <QueryClientProvider client={queryClient}>
          <GlobalStyle />
          <Root>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/category" element={<CategoryPage />} />
              <Route path="/product" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
            <Footer />
          </Root>
        </QueryClientProvider>
      </RadixUITheme>
    </HashRouter>
  );
};
