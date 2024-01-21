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
      apiKey: '7a0fd330b12068d6e2348167297a3c03d96fcb57e76cd771c5bbdd78e3eea8fb',
      selector: 'api-rec',
      setApiKey: (apiKey) => set(() => ({ apiKey })),
      setSelector: (selector) => set(() => ({ selector }))
    }),
    {
      name: 'experience-api-values'
    }
  )
);
