import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ColorMode = 'dark' | 'light';

type State = {
  apiKey: string;
  selector: string;
};

type Actions = {
  setApiKey: (key: string) => void;
  setSelector: (selector: string) => void;
};

export const usePersistApiValuesStore = create<State & Actions>()(
  persist(
    (set) => ({
      apiKey: 'pleaseInsertYourKey',
      selector: 'api-rec',
      setApiKey: (apiKey) => set(() => ({ apiKey })),
      setSelector: (selector) => set(() => ({ selector }))
    }),
    {
      name: 'experience-api-storage'
    }
  )
);
