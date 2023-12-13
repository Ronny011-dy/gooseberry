import { Box, Text } from '@radix-ui/themes';
import {
  Root,
  StyledCard,
  StyledFlexBox,
  StyledImage,
  StyledName,
} from './SlotCard.styles';
export type SlotCardProps = {
  //these should change to mandatory when the carousel is finished
  name?: string;
  image_url?: string;
  price?: string;
};

export const SlotCard: React.FC<SlotCardProps> = ({
  name,
  image_url,
  price,
}) => {
  return (
    <Root>
      <StyledCard variant="classic">
        <StyledFlexBox>
          <StyledName as="div" size="2" weight="bold">
            {name}
          </StyledName>
          <StyledImage
            size="8"
            src={image_url}
            radius="none"
            fallback="NO IMAGE"
          />
          <Box>
            <Text as="div" size="2">
              {Number(price).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0,
              })}
            </Text>
          </Box>
        </StyledFlexBox>
      </StyledCard>
    </Root>
  );
};
