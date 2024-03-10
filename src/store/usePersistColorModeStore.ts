import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ColorMode = 'dark' | 'light';

type State = {
  colorModeString: ColorMode;
  colorModesBoolean: Record<ColorMode, boolean>;
  shouldOverride: boolean;
};

type Actions = {
  toggleColorMode: () => void;
  toggleShouldOverride: () => void;
};

export const usePersistColorModeStore = create<State & Actions>()(
  persist(
    (set) => ({
      colorModesBoolean: {
        dark: false,
        light: true
      },
      colorModeString: 'dark',
      shouldOverride: false,
      toggleColorMode: () => set((prev) => ({ colorModeString: prev.colorModeString === 'dark' ? 'light' : 'dark' })),
      toggleShouldOverride: () => set((prev) => ({ shouldOverride: !prev.shouldOverride }))
    }),
    {
      name: 'color-mode-storage'
    }
  )
);
