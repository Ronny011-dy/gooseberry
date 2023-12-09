import { Avatar, Box, Text, Card } from '@radix-ui/themes';
import { Root, StyledCard, StyledFlexBox } from './SlotCard.styles';
type SlotCardProps = {};

export const SlotCard: React.FC<SlotCardProps> = () => {
  return (
    <Root>
      <StyledCard variant="classic">
        <StyledFlexBox>
          <Text as="div" size="2" weight="bold">
            Adam Jensen
          </Text>
          <Avatar
            size="8"
            src="https://www.giantbomb.com/a/uploads/original/10/106514/1525481-300px_jensen_augs_noshades.jpg"
            radius="small"
            fallback="T"
          />
          <Box>
            <Text as="div" size="2">
              Security
            </Text>
          </Box>
        </StyledFlexBox>
      </StyledCard>
    </Root>
  );
};
