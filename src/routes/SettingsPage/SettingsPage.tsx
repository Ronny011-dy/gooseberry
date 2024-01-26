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
  const { scriptId, categoryContext, productContext, setScriptId, setCategoryContext, setProductContext, lng, setLng } =
    usePersistDyDefaultsStore();
  useEffect(() => {
    setDYContext(type, undefined, lng);
  });

  const { apiKey, selector, setApiKey, setSelector } = usePersistApiValuesStore();

  const handleStoreReset = async () => {
    setScriptId('9880233');
    setCategoryContext('Gin');
    setProductContext('3853');
    setApiKey('7a0fd330b12068d6e2348167297a3c03d96fcb57e76cd771c5bbdd78e3eea8fb');
    setSelector('api-rec');
    setLng('en_US');
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
          placeholder='section id'
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
        <DyDefaultsChanger
          defaultValue={lng}
          placeholder='locale'
          setDefaultValue={setLng}
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
