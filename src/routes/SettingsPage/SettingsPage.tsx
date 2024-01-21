import { useEffect } from 'react';
import { ResetIcon } from '@radix-ui/react-icons';
import { Tooltip } from '@radix-ui/themes';
import toast from 'react-hot-toast';

import { StyledButton, StyledChangersWrapper, StyledTitle } from './SettingsPage.styles';
import { setDYContext } from '../../utils';
import { DyDefaultsChanger } from './components/DyDefaultsChanger';
import { GooseDetails } from './components/GooseDetails';
import { ChangeColorMode } from './components/ChangeColorMode';
import { SitePage } from '../../components/SitePage';
import { usePersistApiValuesStore, usePersistDyDefaultsStore } from '../../store';

export const SettingsPage: React.FC = () => {
  const type = 'OTHER';
  useEffect(() => {
    setDYContext(type);
  });

  const { scriptId, categoryContext, productContext, setScriptId, setCategoryContext, setProductContext } =
    usePersistDyDefaultsStore();
  const { apiKey, selector, setApiKey, setSelector } = usePersistApiValuesStore();

  const handleStoreReset = async () => {
    setScriptId('9880233');
    setCategoryContext('Gin');
    setProductContext('3853');
    toast.success('Values reset to default');
  };

  return (
    <SitePage>
      <StyledTitle>
        <h4>Defaults</h4>
        <Tooltip content='Reset to default values'>
          <StyledButton
            variant='outline'
            onClick={handleStoreReset}
          >
            <ResetIcon />
          </StyledButton>
        </Tooltip>
      </StyledTitle>
      <StyledChangersWrapper>
        <DyDefaultsChanger
          defaultValue={scriptId}
          placeholder='script id'
          setDefaultValue={setScriptId}
        />
        <DyDefaultsChanger
          defaultValue={categoryContext}
          placeholder='category data'
          setDefaultValue={setCategoryContext}
        />
        <DyDefaultsChanger
          defaultValue={productContext}
          placeholder='product data'
          setDefaultValue={setProductContext}
        />
        <DyDefaultsChanger
          defaultValue={apiKey}
          placeholder='api key'
          setDefaultValue={setApiKey}
        />
        <DyDefaultsChanger
          defaultValue={selector}
          placeholder='api selector'
          setDefaultValue={setSelector}
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
    </SitePage>
  );
};
