// import { IconButton } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';

import { Root, StyledSlot, StyledWrapper } from './Carousel.styles';
// import { TriangleLeftIcon, TriangleRightIcon } from '@radix-ui/react-icons';
import { SlotCard } from './components/SlotCard/SlotCard';
import { chooseVariation } from '../../api/api.funcs';
import { Slot } from '../../api/api.types';

export const Carousel: React.FC = () => {
  let productsArr = [];

  // the typescript Jiujitsu needed to replace 'any' with an actual type is not worth it for now
  const { status, data, error } = useQuery<any>({
    queryFn: chooseVariation,
    queryKey: ['slots']
  });
  if (status === 'error') return <div>{error.message}</div>;
  if (status === 'success') {
    // take only 4 products
    productsArr = data.choices[0].variations[0].payload.data.slots.slice(0, 4);
    return (
      <Root>
        {data.choices[0].variations[0].payload.data.custom.title}
        <StyledWrapper>
          {/* <IconButton variant="ghost">
            <TriangleLeftIcon />
          </IconButton> */}
          {productsArr &&
            productsArr.map((product: Slot, index: number) => (
              <StyledSlot
                href={product.productData.url}
                key={index}
              >
                <SlotCard
                  image_url={product.productData.image_url}
                  name={product.productData.name}
                  price={product.productData.price}
                />
              </StyledSlot>
            ))}
          {/* <IconButton variant="ghost">
            <TriangleRightIcon />
          </IconButton> */}
        </StyledWrapper>
      </Root>
    );
  }
};
