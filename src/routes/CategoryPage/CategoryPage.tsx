import { useDY } from '../../hooks/useDY';
import { Root, StyledCategoryChanger } from './CategoryPage.styles';

type CategoryPageProps = {};

const CategoryPage: React.FC<CategoryPageProps> = () => {
  useDY('CATEGORY', ['Gin']);
  return (
    <Root>
      <h3>This is a category page</h3>
      <StyledCategoryChanger>
        <input placeholder="Enter a different category for context" />
        <button>Change</button>
      </StyledCategoryChanger>
      <h3>Category campaign</h3>
    </Root>
  );
};

export { CategoryPage };
