import type { ReactNode } from 'react';

import { Root } from './CampaignSlot.styles';

interface Props {
  bottomMargin?: boolean;
  children?: ReactNode;
  className?: string;
  id?: string;
  title?: string;
}

export const CampaignSlot: React.FC<Props> = ({
  id,
  className,
  children,
  title = 'Campaign slot',
  bottomMargin = false
}) => {
  return (
    <>
      <h4>{title}</h4>
      <Root
        $bottomMargin={bottomMargin}
        $children={children}
        className={`dy campaign ${className}`}
        id={id}
      >
        {children}
      </Root>
    </>
  );
};
