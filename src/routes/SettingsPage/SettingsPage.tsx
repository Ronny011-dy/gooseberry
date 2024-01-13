import { useEffect } from 'react';

import { Root, StyledChangersWrapper } from './SettingsPage.styles';
import { setDYContext } from '../../utils/setDYContext';
import { useDyDefaultsContext } from '../../hooks/useDyDefaultsContext';
import { DyDefaultsChanger } from './components/DyDefaultsChanger/DyDefaultsChanger';
import { GooseDetails } from './components/GooseDetails/GooseDetails';
import { ChangeColorMode } from './components/ChangeColorMode/ChangeColorMode';

export const SettingsPage: React.FC = () => {
  const type = 'OTHER';
  useEffect(() => {
    setDYContext(type);
  });
  const { scriptId, setScriptId, categoryContext, setCategoryContext, productContext, setProductContext } =
    useDyDefaultsContext();

  return (
    <Root>
      <h4>Defaults</h4>
      <StyledChangersWrapper>
        <DyDefaultsChanger
          defaultValue={scriptId}
          setDefaultValue={setScriptId}
          toChange='section_id'
        />
        <DyDefaultsChanger
          defaultValue={categoryContext}
          setDefaultValue={setCategoryContext}
          toChange='category_data'
        />
        {/* <p>XP API Client Side Key</p> */}
        <DyDefaultsChanger
          defaultValue={productContext}
          setDefaultValue={setProductContext}
          toChange='product_data'
        />
      </StyledChangersWrapper>
      <ChangeColorMode />
      <h4>OTHER campaign</h4>
      <div
        className='dy campaign other'
        id='other-campaign'
      >
        <p>Insert campaign here</p>
      </div>
      <GooseDetails />
    </Root>
  );
};
