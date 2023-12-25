import { ReactNode, createContext, useState } from 'react';

interface DYDefaults {
  scriptId: string;
  categoryContext: string;
  productContext: string;
  setScriptId: React.Dispatch<React.SetStateAction<string>>;
  setCategoryContext: React.Dispatch<React.SetStateAction<string>>;
  setProductContext: React.Dispatch<React.SetStateAction<string>>;
}

export const DyDefaultsContext = createContext<DYDefaults | undefined>(
  undefined
);

type DyDefaultsProviderProps = { children: ReactNode };

export type LocalStorageKey = 'section_id' | 'category_data' | 'product_data';

const checkLocalStorage = (defaultValue: string, key: LocalStorageKey) => {
  const valueFromLocalStorage = window.localStorage.getItem(key);
  // value can be null if user didn't visit settings page
  if (valueFromLocalStorage === '""' || valueFromLocalStorage === null)
    return defaultValue;
  else if (valueFromLocalStorage !== '""')
    return valueFromLocalStorage.replaceAll('"', '');
  return 'error';
};

export const DyDefaultsProvider: React.FC<DyDefaultsProviderProps> = ({
  children,
}) => {
  const [scriptId, setScriptId] = useState(
    checkLocalStorage('9880233', 'section_id')
  );
  const [categoryContext, setCategoryContext] = useState(
    checkLocalStorage('Gin', 'category_data')
  );
  const [productContext, setProductContext] = useState('3853');

  const globalValues = {
    scriptId,
    categoryContext,
    productContext,
    setScriptId,
    setCategoryContext,
    setProductContext,
  };

  return (
    <DyDefaultsContext.Provider value={globalValues}>
      {children}
    </DyDefaultsContext.Provider>
  );
};
