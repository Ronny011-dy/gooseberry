import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import { ThemeProviderWithModes } from './theme/ThemeProvider.tsx';
import { DyDefaultsProvider } from './components/DyDefaultsProvider/DyDefaultsProvider.tsx';
import '@radix-ui/themes/styles.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProviderWithModes>
      <DyDefaultsProvider>
        <App />
      </DyDefaultsProvider>
    </ThemeProviderWithModes>
  </React.StrictMode>
);
