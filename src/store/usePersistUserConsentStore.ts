import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type State = {
  userConsent: boolean;
};

type Actions = {
  toggleUserConsent: () => void;
};

export const usePersistUserConsentStore = create<State & Actions>()(
  persist(
    (set) => ({
      toggleUserConsent: () => set((prev) => ({ userConsent: !prev.userConsent })),
      userConsent: false
    }),
    {
      name: 'active-consent-storage'
    }
  )
);
