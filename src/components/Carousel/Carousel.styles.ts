import { ScrollArea } from '@radix-ui/themes';
import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const StyledSlot = styled.a`
  text-decoration: none;
`;

export const StyledWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledLoadingWrapper = styled.div`
  width: fit-content;
  margin: auto;
  margin-top: 100px;
`;

export const StyledScrollArea = styled(ScrollArea)`
  height: 500px;
  width: fit-content;
  text-align: start;
  white-space: pre-wrap;
  border: 1px solid ${(props) => props.theme.colors.fga};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 15px;
`;

export const StyledErrorHeader = styled.h6`
  color: ${(props) => (props.theme.colors.bg === 'whitesmoke' ? 'darkred' : 'red')};
`;
