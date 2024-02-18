import { Separator } from '@radix-ui/themes';
import styled from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
`;

export const StyledSeparator = styled(Separator)`
  background-color: var(--accent-a11);
`;
