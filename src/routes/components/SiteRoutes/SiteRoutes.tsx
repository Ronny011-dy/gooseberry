import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { HomePage, CategoryPage, ProductPage, CartPage, SettingsPage } from 'routes';

interface Props {}

export const SiteRoutes: FC<Props> = () => {
  return (
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
  );
};
