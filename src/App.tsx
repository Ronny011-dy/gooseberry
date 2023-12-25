import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Root } from './App.styles';
import { Theme as RadixUITheme } from '@radix-ui/themes';
import { useTheme } from 'styled-components';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { appendScript } from './utils/funcs.util';
import { useDyDefaultsContext } from './hooks/useDyDefaultsContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const { scriptId } = useDyDefaultsContext();
  useEffect(() => {
    appendScript(scriptId);
  }, []);
  const queryClient = new QueryClient();
  const theme = useTheme();
  return (
    <RadixUITheme
      appearance={`${theme.colors.bg === 'whitesmoke' ? 'light' : 'dark'}`}
      radius="small"
      panelBackground="translucent"
      accentColor="yellow"
    >
      <Toaster position="top-right" reverseOrder={false} />
      <QueryClientProvider client={queryClient}>
        <Root>
          <Header />
          <Outlet />
          <Footer />
        </Root>
      </QueryClientProvider>
    </RadixUITheme>
  );
}

export default App;
