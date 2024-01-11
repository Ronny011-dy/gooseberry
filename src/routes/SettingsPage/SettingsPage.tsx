import { useEffect } from 'react';
import { Root, StyledChangersWrapper } from './SettingsPage.styles';
import { setDYContext } from '../../utils/setDYContext';
import { useDyDefaultsContext } from '../../hooks/useDyDefaultsContext';
import { DyDefaultsChanger } from './components/DyDefaultsChanger/DyDefaultsChanger';
import { GooseDetails } from './components/GooseDetails/GooseDetails';
import { ChangeColorMode } from './components/ChangeColorMode/ChangeColorMode';

type SettingsPageProps = {};

export const SettingsPage: React.FC<SettingsPageProps> = () => {
  const type = 'OTHER';
  useEffect(() => {
    setDYContext(type);
  });
  const {
    scriptId,
    setScriptId,
    categoryContext,
    setCategoryContext,
    productContext,
    setProductContext,
  } = useDyDefaultsContext();

  return (
    <Root>
      <h4>Defaults</h4>
      <StyledChangersWrapper>
        <DyDefaultsChanger
          toChange="section_id"
          defaultValue={scriptId}
          setDefaultValue={setScriptId}
        />
        <DyDefaultsChanger
          toChange="category_data"
          defaultValue={categoryContext}
          setDefaultValue={setCategoryContext}
        />
        {/* <p>XP API Client Side Key</p> */}
        <DyDefaultsChanger
          toChange="product_data"
          defaultValue={productContext}
          setDefaultValue={setProductContext}
        />
      </StyledChangersWrapper>
      <ChangeColorMode />
      <h4>OTHER campaign</h4>
      <div className="dy campaign other" id="other-campaign">
        <p>Insert campaign here</p>
      </div>
      <GooseDetails />
    </Root>
  );
};
