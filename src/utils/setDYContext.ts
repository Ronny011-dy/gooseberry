type PageContext = 'HOMEPAGE' | 'CATEGORY' | 'PRODUCT' | 'CART' | 'OTHER';

export const setDYContext = (type: PageContext, data?: string[]): void => {
  (window as any).DY = (window as any).DY || {};
  (window as any).DY.recommendationContext = data
    ? { type: type, data: data }
    : { type: type };
};
