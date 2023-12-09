import { IconButton } from '@radix-ui/themes';
import { Root } from './Carousel.styles';
import { TriangleLeftIcon, TriangleRightIcon } from '@radix-ui/react-icons';
import { SlotCard } from './components/SlotCard/SlotCard';

type CarouselProps = {};

export const Carousel: React.FC<CarouselProps> = () => {
  return (
    <Root>
      <IconButton variant="ghost">
        <TriangleLeftIcon />
      </IconButton>
      <SlotCard />
      <IconButton variant="ghost">
        <TriangleRightIcon />
      </IconButton>
    </Root>
  );
};
