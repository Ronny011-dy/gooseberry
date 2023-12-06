import { useEffect } from 'react';
import { sectionID } from '../common/variables';
import { setDYContext } from '../utils/setDYContext';
import { appendScript } from '../utils/appendScript';

type PageContext = 'HOMEPAGE' | 'CATEGORY' | 'PRODUCT' | 'CART' | 'OTHER';

const useDY = (type: PageContext, data?: string[]) => {
  useEffect(() => setDYContext({ type, data }));
  useEffect(() => {
    appendScript(sectionID);
  }, []);
};

export { useDY };
