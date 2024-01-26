import { InfoCircledIcon } from '@radix-ui/react-icons';
import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  gap: 15px;
  width: fit-content;
  margin: auto;
  margin-top: 25px;
  align-items: center;
  input {
    width: 22.5ch;
  }
`;
export const StyledInfoIcon = styled(InfoCircledIcon)`
  margin-bottom: 3px;
  color: gray;
  &:hover {
    color: black;
  }
`;
