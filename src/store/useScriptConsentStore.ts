import { create } from 'zustand';

type State = {
  scriptConsent: boolean;
  userConsent: boolean;
};

type Actions = {
  setUserConsent: (consent: boolean) => void;
};

export const useScriptConsentStore = create<State & Actions>()((set) => ({
  scriptConsent: false,
  setUserConsent: (scriptConsent) => set(() => ({ scriptConsent })),
  userConsent: false
}));
