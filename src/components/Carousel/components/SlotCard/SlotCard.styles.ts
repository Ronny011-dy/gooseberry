import { Card } from '@radix-ui/themes';
import styled from 'styled-components';

export const Root = styled.div``;

export const StyledFlexBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const StyledCard = styled(Card)`
  background-color: transparent;
  border: solid 1px ${(props) => props.theme.colors.primary};
`;
