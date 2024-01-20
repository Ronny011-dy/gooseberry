import { FC, ReactNode } from 'react';

import { Root } from './SitePage.styles';

interface Props {
  children: ReactNode;
}

export const SitePage: FC<Props> = ({ children }) => {
  return <Root>{children}</Root>;
};
