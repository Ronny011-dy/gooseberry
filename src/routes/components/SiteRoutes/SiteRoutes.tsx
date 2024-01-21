import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { HomePage } from '../../Homepage';
import { CategoryPage } from '../../CategoryPage';
import { ProductPage } from '../../ProductPage';
import { CartPage } from '../../CartPage';
import { SettingsPage } from '../../SettingsPage';

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
