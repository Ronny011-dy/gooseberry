import { FC } from 'react';

import { DyDefaultsChanger, DyDefaultsChangerProps } from '../DyDefaultsChanger/DyDefaultsChanger';
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
