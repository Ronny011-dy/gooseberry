import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ColorMode = 'dark' | 'light';

type State = {
  categoryContext: string;
  lng: string;
  productContext: string;
  scriptId: string;
};

type Actions = {
  setCategoryContext: (context: string) => void;
  setLng: (lng: string) => void;
  setProductContext: (context: string) => void;
  setScriptId: (id: string) => void;
};

export const usePersistDyDefaultsStore = create<State & Actions>()(
  persist(
    (set) => ({
      categoryContext: 'Gin',
      lng: 'en_US',
      productContext: '3853',
      scriptId: '9880233',
      setCategoryContext: (categoryContext) => set(() => ({ categoryContext })),
      setLng: (lng) => set(() => ({ lng })),
      setProductContext: (productContext) => set(() => ({ productContext })),
      setScriptId: (scriptId) => set(() => ({ scriptId }))
    }),
    {
      name: 'dy-defaults-storage'
    }
  )
);
