export type PageContext = 'HOMEPAGE' | 'CATEGORY' | 'PRODUCT' | 'CART' | 'OTHER';

export const setDYContext = (type: PageContext, data?: string[]): void => {
  (window as any).DY = (window as any).DY || {};
  (window as any).DY.recommendationContext = data ? { data, type } : { type };
};
