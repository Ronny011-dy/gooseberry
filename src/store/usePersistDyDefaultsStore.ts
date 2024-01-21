import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ColorMode = 'dark' | 'light';

type State = {
  categoryContext: string;
  productContext: string;
  scriptId: string;
};

type Actions = {
  setCategoryContext: (context: string) => void;
  setProductContext: (context: string) => void;
  setScriptId: (id: string) => void;
};

export const usePersistDyDefaultsStore = create<State & Actions>()(
  persist(
    (set) => ({
      categoryContext: 'Gin',
      productContext: '3853',
      scriptId: '9880233',
      setCategoryContext: (categoryContext) => set(() => ({ categoryContext })),
      setProductContext: (productContext) => set(() => ({ productContext })),
      setScriptId: (scriptId) => set(() => ({ scriptId }))
    }),
    {
      name: 'dy-defaults-storage'
    }
  )
);
