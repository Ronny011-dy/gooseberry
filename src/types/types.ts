export type PageContext = 'HOMEPAGE' | 'CATEGORY' | 'PRODUCT' | 'CART' | 'OTHER';

export type RecommendationContext = {
  data?: string[];
  lng?: string;
  type: string;
};

type API = (commandType: string, payload: Object) => void;

type UserActiveConsent = { accepted: boolean };

export type DY = {
  API: API;
  recommendationContext: RecommendationContext;
  userActiveConsent: UserActiveConsent;
};

type Variation = { payload: { data: { custom: { title: string }; slots: [] } } };

type Choice = { variations: Variation[] };

export type ChooseResponse = { choices: Choice[]; explain: string };
