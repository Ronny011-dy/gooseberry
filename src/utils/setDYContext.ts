export type PageContext = 'HOMEPAGE' | 'CATEGORY' | 'PRODUCT' | 'CART' | 'OTHER';

export const setDYContext = (type: PageContext, data?: string[], lng?: string): void => {
  (window as any).DY = (window as any).DY || {};
  (window as any).DY.recommendationContext = data ? { data, lng, type } : { lng, type };
};
