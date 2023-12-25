import { useContext } from 'react';
import { DyDefaultsContext } from '../components/DyDefaultsProvider/DyDefaultsProvider';

export const useDyDefaultsContext = () => {
  const context = useContext(DyDefaultsContext);
  if (!context) {
    throw new Error(
      'useDyDefaultsContext must be used within DyDefaultsProvider'
    );
  }
  return context;
};
