import { Tooltip } from '@radix-ui/themes';
import { useRef, useState } from 'react';
import toast from 'react-hot-toast';

import { usePersistDyDefaultsStore } from 'store';
import type { PageContext } from 'types';
import { setDYContext } from 'utils';
import { InputWithButton, InputWithButtonProps } from 'components/InputWithButton';

import { Root, StyledInfoIcon } from './RecommendationContextChanger.styles';

interface Props {
  type: PageContext;
}

export const RecommendationContextChanger: React.FC<Props> = ({ type }) => {
  const { lng } = usePersistDyDefaultsStore();
  const [contextData, setContextData] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = () => {
    contextData && setDYContext(type, [contextData], lng);
    toast.success(`Context changed to ${JSON.stringify(window.DY.recommendationContext)}`);
    setContextData('');
  };

  const inputWithButtonParams: InputWithButtonProps = {
    buttonCallback: onClick,
    buttonLabel: 'Change',
    inputRef,
    inputValue: contextData,
    placeholder: 'Enter context data',
    setInputValue: setContextData,
    value: contextData
  };

  return (
    <Root>
      <InputWithButton {...inputWithButtonParams} />
      <Tooltip
        content='The values should match the product feed'
        delayDuration={0}
      >
        <StyledInfoIcon />
      </Tooltip>
    </Root>
  );
};
