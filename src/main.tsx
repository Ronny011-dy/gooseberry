import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

import { Homepage } from './routes/Homepage/Homepage.tsx';

const router = createBrowserRouter([
  {
    path: '/gooseberry',
    element: <App />,
    children: [{ path: '/gooseberry', element: <Homepage /> }],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
