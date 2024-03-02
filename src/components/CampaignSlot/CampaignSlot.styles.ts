import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

export const Root = styled.div<{ $children: ReactNode; bottomMargin: boolean }>`
  ${({ $children }) =>
    !$children &&
    css`
      border: 1px solid gray;
      border-radius: 5px;
      background-color: gray;
      min-height: 50px;
    `}
  ${({ bottomMargin }) =>
    bottomMargin &&
    css`
      margin-bottom: 15px;
    `}
`;
