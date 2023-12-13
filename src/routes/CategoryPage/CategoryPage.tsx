import { Root } from './CategoryPage.styles';
import { useEffect } from 'react';
import { setDYContext } from '../../utils/setDYContext';
import { ContextChanger } from '../../components/ContextChanger/ContextChanger';

type CategoryPageProps = {};

const CategoryPage: React.FC<CategoryPageProps> = () => {
  const type = 'CATEGORY';
  const data = ['Gin'];
  useEffect(() => {
    setDYContext(type, data);
  });

  return (
    <Root>
      <h3>Category page</h3>
      <ContextChanger type="CATEGORY" />
      <div>
        <h3>Category campaign</h3>
        <p id="category-campaign">Insert campaign here</p>
      </div>
    </Root>
  );
};

export { CategoryPage };
