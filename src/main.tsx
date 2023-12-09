import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '@radix-ui/themes/styles.css';
import App from './App.tsx';
import './index.css';

import { HomePage } from './routes/HomePage/HomePage';
import { CategoryPage } from './routes/CategoryPage/CategoryPage.tsx';
import { ThemeProviderWithModes } from './theme/ThemeProvider.tsx';
import { ProductPage } from './routes/ProductPage/ProductPage.tsx';
import { CartPage } from './routes/CartPage/CartPage.tsx';
import { SettingsPage } from './routes/SettingsPage/SettingsPage.tsx';

const router = createBrowserRouter([
  {
    path: '/gooseberry',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/gooseberry/category', element: <CategoryPage /> },
      { path: '/gooseberry/pdp', element: <ProductPage /> },
      { path: '/gooseberry/cart', element: <CartPage /> },
      { path: '/gooseberry/settings', element: <SettingsPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProviderWithModes>
      <RouterProvider router={router} />
    </ThemeProviderWithModes>
  </React.StrictMode>
);
