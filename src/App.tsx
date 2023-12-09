import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Root } from './App.styles';
import { Theme as RadixUITheme } from '@radix-ui/themes';
import { useTheme } from 'styled-components';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { appendScript } from './utils/appendScript';
import { sectionID } from './common/variables';

function App() {
  useEffect(() => {
    appendScript(sectionID); // we will get two sets of scripts in development
  }, []);
  const theme = useTheme();
  return (
    <RadixUITheme
      appearance={`${theme.colors.bg === 'whitesmoke' ? 'light' : 'dark'}`}
      radius="small"
      panelBackground="translucent"
      accentColor="yellow"
    >
      <Toaster position="top-right" reverseOrder={false} />
      <Root>
        <Header />
        <Outlet />
        <Footer />
      </Root>
    </RadixUITheme>
  );
}

export default App;
