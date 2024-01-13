import { ChangeEvent, useRef, useState } from 'react';
import { Button, TextFieldInput } from '@radix-ui/themes';

import { useLocalStorage } from '../../../../hooks/useLocalStorage';
import { Root } from './DyDefaultsChanger.styles';
import type { LocalStorageKey } from '../../../../components/DyDefaultsProvider/DyDefaultsProvider';
import { appendScript } from '../../../../utils/functions';

interface Props {
  defaultValue: string | string[];
  setDefaultValue: React.Dispatch<React.SetStateAction<string>>;
  toChange: LocalStorageKey;
}

type InputParams = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => void;
  pattern?: string;
  placeholder: string;
  ref: React.RefObject<HTMLInputElement>;
  value: string;
};

export const DyDefaultsChanger: React.FC<Props> = ({ toChange, defaultValue, setDefaultValue }) => {
  const [_, setLocalStorage] = useLocalStorage(toChange, '');
  const ref = useRef<HTMLInputElement>(null);
  const [value, setInputValue] = useState('');
  const placeholder = `Enter ${toChange.replace('_', ' ')}`;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const isContext = toChange !== 'section_id';
  const onClick = () => {
    if (!isContext) {
      const scriptValidity = ref.current && ref.current.reportValidity();
      if (scriptValidity) {
        appendScript(value);
        setLocalStorage(value); // need to add a check if the value is the exact same then don't do anything
        setDefaultValue(value);
        location.reload();
      }
    } else {
      setLocalStorage(value);
      setDefaultValue(value);
    }
  };
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onClick();
      isContext && ref.current?.blur(); //this will onfocus validity report as well
    }
  };
  const inputParams: InputParams = {
    onChange,
    onKeyDown,
    placeholder,
    ref,
    value
  };
  if (toChange === 'section_id') inputParams['pattern'] = '^[89][0-9]{6}$';
  return (
    <Root>
      Current {toChange.split('_')[0]}: {defaultValue}
      <TextFieldInput {...inputParams} />
      <Button
        variant='outline'
        onClick={onClick}
      >
        Save
      </Button>
    </Root>
  );
};
