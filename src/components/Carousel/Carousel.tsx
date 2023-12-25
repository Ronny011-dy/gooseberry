import { IconButton } from '@radix-ui/themes';
import { Root } from './Carousel.styles';
import { TriangleLeftIcon, TriangleRightIcon } from '@radix-ui/react-icons';
import { SlotCard } from './components/SlotCard/SlotCard';
import type { Slot } from '../../api/api.types';

type CarouselProps = { productsArr: Slot[] };

export const Carousel: React.FC<CarouselProps> = ({ productsArr }) => {
  // console.log(productsArr);
  return (
    <Root>
      <IconButton variant="ghost">
        <TriangleLeftIcon />
      </IconButton>
      {/* {productsArr.map((product) => (
        <SlotCard />
      ))} */}
      <SlotCard />
      <IconButton variant="ghost">
        <TriangleRightIcon />
      </IconButton>
    </Root>
  );
};
