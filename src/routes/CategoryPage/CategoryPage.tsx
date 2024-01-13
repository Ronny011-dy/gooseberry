import { useEffect } from 'react';

import { Root } from './CategoryPage.styles';
import { setDYContext } from '../../utils/setDYContext';
import { RecContextChanger } from '../../components/RecContextChanger/RecContextChanger';
import { useDyDefaultsContext } from '../../hooks/useDyDefaultsContext';
import { parseContext } from '../../utils/functions';

export const CategoryPage: React.FC = () => {
  const type = 'CATEGORY';

  const { categoryContext } = useDyDefaultsContext();
  useEffect(() => {
    setDYContext(type, parseContext(categoryContext));
  });

  return (
    <Root>
      <RecContextChanger type='CATEGORY' />
      <h4>Category campaign</h4>
      <div
        className='dy campaign category'
        id='category-campaign'
      >
        <p>Insert campaign here</p>
      </div>
    </Root>
  );
};
