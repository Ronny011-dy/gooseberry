import { useEffect } from 'react';
import { ResetIcon } from '@radix-ui/react-icons';
import { Tooltip } from '@radix-ui/themes';
import toast from 'react-hot-toast';

import { setDYContext } from 'utils';
import { SitePage } from 'components/SitePage';
import { usePersistApiValuesStore, usePersistDyDefaultsStore } from 'store';
import { CampaignSlot } from 'components/CampaignSlot';

import { StyledButton, StyledTitle } from './SettingsPage.styles';
import { GooseDetails } from './components/GooseDetails';
import { ChangeColorMode } from './components/ChangeColorMode';
import { Redirects } from './components/Redirects/Redirects';
import { DyDefaultsChangerProps } from './components/DyDefaultsChanger/DyDefaultsChanger';
import { DyDefaultsChangerList } from './components/DyDefaultsChangerList/DyDefaultsChangerList';

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
    setSelector('api-rec');
    setLng('en_US');
    toast.success('Values reset to default');
  };

  const settingsArr: DyDefaultsChangerProps[] = [
    { defaultValue: scriptId, placeholder: 'section id', setDefaultValue: setScriptId },
    { defaultValue: categoryContext, placeholder: 'category data', setDefaultValue: setCategoryContext },
    { defaultValue: productContext, placeholder: 'product data', setDefaultValue: setProductContext },
    { defaultValue: apiKey, placeholder: 'api key', setDefaultValue: setApiKey },
    { defaultValue: selector, placeholder: 'api selector', setDefaultValue: setSelector },
    { defaultValue: lng, placeholder: 'locale', setDefaultValue: setLng }
  ];

  return (
    <SitePage>
      <StyledTitle>
        <h4>Defaults</h4>
        <Tooltip
          content='Reset to default values'
          delayDuration={0}
        >
          <StyledButton
            variant='outline'
            onClick={handleStoreReset}
          >
            <ResetIcon />
          </StyledButton>
        </Tooltip>
      </StyledTitle>
      <Redirects scriptId={scriptId} />
      <DyDefaultsChangerList settingsArr={settingsArr} />
      <ChangeColorMode />
      <CampaignSlot
        className='dy campaign other'
        id='other-campaign'
      />
      <GooseDetails />
    </SitePage>
  );
};
