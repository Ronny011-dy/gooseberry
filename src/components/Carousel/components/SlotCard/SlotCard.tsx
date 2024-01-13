import { Box, Text } from '@radix-ui/themes';

import { Root, StyledCard, StyledFlexBox, StyledImage, StyledName } from './SlotCard.styles';
interface Props {
  image_url: string;
  name: string;
  price: string;
}

export const SlotCard: React.FC<Props> = ({ name, image_url, price }) => {
  return (
    <Root>
      <StyledCard variant='classic'>
        <StyledFlexBox>
          <StyledName
            as='div'
            size='2'
            weight='bold'
          >
            {name}
          </StyledName>
          <StyledImage
            fallback='NO IMAGE'
            radius='none'
            size='8'
            src={image_url}
          />
          <Box>
            <Text
              as='div'
              size='2'
            >
              {Number(price).toLocaleString('en-US', {
                currency: 'USD',
                minimumFractionDigits: 0,
                style: 'currency'
              })}
            </Text>
          </Box>
        </StyledFlexBox>
      </StyledCard>
    </Root>
  );
};
