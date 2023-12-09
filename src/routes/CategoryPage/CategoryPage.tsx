import { Root, StyledCategoryChanger } from './CategoryPage.styles';
import { Button, TextField } from '@radix-ui/themes';
import { GearIcon } from '@radix-ui/react-icons';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { setDYContext } from '../../utils/setDYContext';
import toast from 'react-hot-toast';

type CategoryPageProps = {};

const CategoryPage: React.FC<CategoryPageProps> = () => {
  const [category, setCategory] = useState('');
  const textInputRef = useRef<HTMLInputElement>(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  const handleClick = () => {
    category && setDYContext('CATEGORY', [category]);
    toast.success(
      `Context changed succesfully to ${JSON.stringify(
        (window as any).DY.recommendationContext
      )}`
    );
    setCategory('');
  };

  const handleTextInputKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleClick();
      textInputRef.current?.blur();
    }
  };

  useEffect(() => {
    setDYContext('CATEGORY', ['Gin']);
  }, []);

  return (
    <Root>
      <h3>This is a Category page</h3>
      <StyledCategoryChanger>
        <TextField.Root>
          <TextField.Slot>
            <GearIcon height="16" width="16" />
          </TextField.Slot>
          <TextField.Input
            placeholder="Enter a different category for context"
            value={category}
            ref={textInputRef}
            onChange={handleChange}
            onKeyDown={handleTextInputKeyDown}
          />
        </TextField.Root>
        <Button variant="outline" onClick={handleClick}>
          Change
        </Button>
      </StyledCategoryChanger>
      <div>
        <h3>Category campaign</h3>
        <p id="category-campaign">Insert campaign here</p>
      </div>
    </Root>
  );
};

export { CategoryPage };
