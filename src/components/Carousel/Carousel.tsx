// import { IconButton } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';
import { ThreeDots } from 'react-loader-spinner';
import { useTheme } from 'styled-components';
import { Code } from '@radix-ui/themes';

import { Slot, chooseVariation } from 'api';
import { usePersistApiValuesStore, usePersistDyDefaultsStore, usePersistUserConsentStore } from 'store';
import type { ChooseResponse } from 'types';

import {
  Root,
  StyledErrorHeader,
  StyledLoadingWrapper,
  StyledScrollArea,
  StyledSlot,
  StyledWrapper
} from './Carousel.styles';
// import { TriangleLeftIcon, TriangleRightIcon } from '@radix-ui/react-icons';
import { SlotCard } from './components/SlotCard';

const formatJSON = (payload: string) => JSON.stringify(payload, null, 2);

export const Carousel: React.FC = () => {
  const theme = useTheme();
  const { userConsent } = usePersistUserConsentStore();
  let productsArr = [];
  const { scriptId } = usePersistDyDefaultsStore();
  const { selector, apiKey } = usePersistApiValuesStore();

  const { status, data, isLoading, error } = useQuery<ChooseResponse>({
    queryFn: () => chooseVariation(scriptId, selector, apiKey, userConsent),
    queryKey: ['slots'],
    retry: false,
    staleTime: 5 * 1000 * 60
  });
  if (isLoading)
    return (
      <StyledLoadingWrapper>
        <ThreeDots color={theme.colors.primary} />
      </StyledLoadingWrapper>
    );
  if (status === 'error') return <StyledErrorHeader>{error.message}</StyledErrorHeader>;
  if (status === 'success') {
    try {
      // take only 4 products
      productsArr = data.choices[0].variations[0].payload.data.slots.slice(0, 4);
    } catch (error) {
      return (
        <StyledScrollArea
          scrollbars='vertical'
          type='always'
        >
          <StyledErrorHeader>
            {`${formatJSON(data.explain).match(/"(found|valid)": false/)}`?.slice(0, -6)}
          </StyledErrorHeader>
          <Code variant='ghost'>{formatJSON(data.explain)}</Code>
        </StyledScrollArea>
      );
    }
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
