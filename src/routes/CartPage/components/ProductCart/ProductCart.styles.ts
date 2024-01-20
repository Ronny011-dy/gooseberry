import { Button, Card } from '@radix-ui/themes';
import styled from 'styled-components';

export const Root = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

export const StyledCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 15px;
`;

export const StyledCard = styled(Card)`
  background-color: transparent;
  border: solid 1px ${(props) => props.theme.colors.primary};
  div {
    padding: 0 5px 0 5px;
  }
`;

export const StyledButton = styled(Button)``;

export const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  height: fit-content;
  gap: 15px;
  ${StyledButton} {
    padding: 5px;
  }
`;

export const StyledProductDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;
