import { Root } from './CategoryPage.styles';
import { useEffect } from 'react';
import { setDYContext } from '../../utils/setDYContext';
import { RecContextChanger } from '../../components/RecContextChanger/RecContextChanger';
import { useDyDefaultsContext } from '../../hooks/useDyDefaultsContext';
import { parseContext } from '../../utils/funcs.util';

export const CategoryPage: React.FC = () => {
  const type = 'CATEGORY';

  const { categoryContext } = useDyDefaultsContext();
  useEffect(() => {
    setDYContext(type, parseContext(categoryContext));
  });

  return (
    <Root>
      <RecContextChanger type="CATEGORY" />
      <div>
        <h4>Category campaign</h4>
        <p id="category-campaign">Insert campaign here</p>
      </div>
    </Root>
  );
};
