import { ChangeEvent, useRef, useState } from 'react';
import toast from 'react-hot-toast';

import { Root, StyledEllipsis } from './DyDefaultsChanger.styles';
import { appendScript } from '../../../../utils';
import { InputWithButton } from '../../../../components/InputWithButton/InputWithButton';
import type { InputWithButtonProps } from '../../../../components/InputWithButton/InputWithButton';

type Placeholders = 'section id' | 'category data' | 'product data' | 'api key' | 'api selector' | 'locale';

export type DyDefaultsChangerProps = {
  defaultValue: string;
  placeholder: Placeholders;
  setDefaultValue: (param: string) => void;
};

export const DyDefaultsChanger: React.FC<DyDefaultsChangerProps> = ({ defaultValue, setDefaultValue, placeholder }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setInputValue] = useState('');
  const isContextOrSelector = placeholder !== 'section id';

  const onScriptSave = () => {
    const scriptValidity = inputRef.current && inputRef.current.reportValidity();
    if (scriptValidity) {
      appendScript(value);
      setDefaultValue(value);
      location.reload();
    }
  };

  const onContextAndSelectorSave = () => {
    setDefaultValue(value);
    toast.success('Context changed successfully');
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const buttonCallback = () => {
    if (placeholder === 'section id') {
      onScriptSave();
    } else {
      onContextAndSelectorSave();
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      buttonCallback();
      isContextOrSelector && inputRef.current?.blur(); //this will onfocus validity report as well
    }
  };

  const inputWithButtonParams: InputWithButtonProps = {
    buttonCallback,
    buttonLabel: 'Save',
    inputRef,
    onChange,
    onKeyDown,
    placeholder: `Enter ${placeholder}`,
    value
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
