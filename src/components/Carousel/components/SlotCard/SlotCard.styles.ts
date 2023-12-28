import { Avatar, Card, Text } from '@radix-ui/themes';
import styled from 'styled-components';

export const Root = styled.div`
  color: ${(props) => props.theme.colors.fg};
`;

export const StyledFlexBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
`;

export const StyledCard = styled(Card)`
  background-color: transparent;
  border: solid 1px ${(props) => props.theme.colors.primary};
`;

export const StyledName = styled(Text)`
  font-weight: bold;
  width: 18ch;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledImage = styled(Avatar)`
  img {
    object-fit: contain;
  }
`;
