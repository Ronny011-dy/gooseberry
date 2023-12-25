import { ChangeEvent, useRef, useState } from 'react';
import { useLocalStorage } from '../../../../hooks/useLocalStorage';
import { Root } from './DyDefaultsChanger.styles';
import { appendScript } from '../../../../utils/funcs.util';
import { Button, TextFieldInput } from '@radix-ui/themes';
import type { LocalStorageKey } from '../../../../components/DyDefaultsProvider/DyDefaultsProvider';

type DyDefaultsChanger = {
  toChange: LocalStorageKey;
  defaultValue: string | string[];
  setDefaultValue: React.Dispatch<React.SetStateAction<string>>;
};

type InputParams = {
  placeholder: string;
  ref: React.RefObject<HTMLInputElement>;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => void;
  pattern?: string;
};

export const DyDefaultsChanger: React.FC<DyDefaultsChanger> = ({
  toChange,
  defaultValue,
  setDefaultValue,
}) => {
  const [_, setLocalStorage] = useLocalStorage(toChange, '');
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState('');
  const placeholder = `Enter ${toChange.replace('_', ' ')}`;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const isContext = toChange !== 'section_id';
  const handleSave = () => {
    if (!isContext) {
      const scriptValidity =
        inputRef.current && inputRef.current.reportValidity();
      if (scriptValidity) {
        appendScript(inputValue);
        setLocalStorage(inputValue); // need to add a check if the value is the exact same then don't do anything
        setDefaultValue(inputValue);
        location.reload();
      }
    } else {
      setLocalStorage(inputValue);
      setDefaultValue(inputValue);
    }
  };
  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSave();
      isContext && inputRef.current?.blur(); //this will onfocus validity report as well
    }
  };
  const inputParams: InputParams = {
    placeholder,
    ref: inputRef,
    value: inputValue,
    onChange: handleInputChange,
    onKeyDown: handleInputKeyDown,
  };
  if (toChange === 'section_id') inputParams['pattern'] = '^[89][0-9]{6}$';
  return (
    <Root>
      Current {toChange.split('_')[0]}: {defaultValue}
      <TextFieldInput {...inputParams} />
      <Button variant="outline" onClick={handleSave}>
        Save
      </Button>
    </Root>
  );
};
