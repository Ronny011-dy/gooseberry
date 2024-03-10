import { useRef, useState } from 'react';
import toast from 'react-hot-toast';

import { appendScript } from 'utils';
import { InputWithButton, type InputWithButtonProps } from 'components/InputWithButton/';

import { Root, StyledEllipsis } from './DyDefaultsChanger.styles';

type Placeholders = 'section id' | 'category data' | 'product data' | 'api key' | 'api selector' | 'locale';

export type DyDefaultsChangerProps = {
  defaultValue: string;
  placeholder: Placeholders;
  setDefaultValue: (param: string) => void;
};

export const DyDefaultsChanger: React.FC<DyDefaultsChangerProps> = ({ defaultValue, setDefaultValue, placeholder }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState('');

  const onScriptSave = () => {
    const scriptValidity = inputRef.current && inputRef.current.reportValidity();
    if (scriptValidity) {
      appendScript(inputValue);
      setDefaultValue(inputValue);
      location.reload();
    }
  };

  const onContextAndSelectorSave = () => {
    setDefaultValue(inputValue);
    toast.success('Context changed successfully');
  };

  const buttonCallback = () => {
    placeholder === 'section id' ? onScriptSave() : onContextAndSelectorSave();
  };

  const inputWithButtonParams: InputWithButtonProps = {
    buttonCallback,
    buttonLabel: 'Save',
    inputRef,
    inputValue,
    placeholder: `Enter ${placeholder}`,
    setInputValue
  };

  if (placeholder === 'section id') inputWithButtonParams['pattern'] = '^[89][0-9]{6}$';

  return (
    <Root>
      Current {placeholder}:
      <StyledEllipsis variant='ghost'>{placeholder === 'api key' ? '•••••••' : defaultValue}</StyledEllipsis>
      <InputWithButton {...inputWithButtonParams} />
    </Root>
  );
};
