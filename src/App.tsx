import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Root } from './App.styles';

function App() {
  return (
    <Root>
      <Header />
      <Outlet />
      <Footer />
    </Root>
  );
}

export default App;
