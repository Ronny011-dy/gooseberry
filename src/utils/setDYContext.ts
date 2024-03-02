import type { PageContext } from 'types';

export const setDYContext = (type: PageContext, data?: string[], lng?: string): void => {
  window.DY = window.DY || {};
  window.DY.recommendationContext = data ? { data, lng, type } : { lng, type };
};
