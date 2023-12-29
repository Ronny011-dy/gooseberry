import React from 'react';
import ReactDOM from 'react-dom/client';
import '@radix-ui/themes/styles.css';
import App from './App.tsx';
import './index.css';

import { ThemeProviderWithModes } from './theme/ThemeProvider.tsx';
import { DyDefaultsProvider } from './components/DyDefaultsProvider/DyDefaultsProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProviderWithModes>
      <DyDefaultsProvider>
        <App />
      </DyDefaultsProvider>
    </ThemeProviderWithModes>
  </React.StrictMode>
);
