import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

import { Homepage } from './routes/Homepage/Homepage.tsx';
import { CategoryPage } from './routes/CategoryPage/CategoryPage.tsx';
import { ThemeProviderWithModes } from './theme/ThemeProvider.tsx';

const router = createBrowserRouter([
  {
    path: '/gooseberry',
    element: <App />,
    children: [
      { index: true, element: <Homepage /> },
      { path: '/gooseberry/category', element: <CategoryPage /> },
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
