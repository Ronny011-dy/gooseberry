import type { FC } from 'react';

import { DyDefaultsChanger, type DyDefaultsChangerProps } from '../DyDefaultsChanger';
import { Root } from './DyDefaultsChangerList.styles';

interface Props {
  settingsArr: DyDefaultsChangerProps[];
}

export const DyDefaultsChangerList: FC<Props> = ({ settingsArr }) => {
  return (
    <Root>
      {settingsArr.map((settingProps, index) => (
        <DyDefaultsChanger
          key={index}
          {...settingProps}
        />
      ))}
    </Root>
  );
};
