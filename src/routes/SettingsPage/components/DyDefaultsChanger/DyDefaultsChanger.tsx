import { ChangeEvent, useRef, useState } from 'react';
import { Button, TextFieldInput } from '@radix-ui/themes';
import toast from 'react-hot-toast';

import { Root, StyledEllipsis } from './DyDefaultsChanger.styles';
import { appendScript } from '../../../../utils';

type Placeholders = 'section id' | 'category data' | 'product data' | 'api key' | 'api selector' | 'locale';

type InputParams = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => void;
  pattern?: string;
  placeholder: string;
  ref: React.RefObject<HTMLInputElement>;
  value: string;
};
interface Props {
  defaultValue: string;
  placeholder: Placeholders;
  setDefaultValue: (param: string) => void;
}

export const DyDefaultsChanger: React.FC<Props> = ({ defaultValue, setDefaultValue, placeholder }) => {
  const ref = useRef<HTMLInputElement>(null);
  const [value, setInputValue] = useState('');
  const isContextOrSelector = placeholder !== 'section id';

  const onScriptSave = () => {
    const scriptValidity = ref.current && ref.current.reportValidity();
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

  const onClick = () => {
    if (placeholder === 'section id') {
      onScriptSave();
    } else {
      onContextAndSelectorSave();
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onClick();
      isContextOrSelector && ref.current?.blur(); //this will onfocus validity report as well
    }
  };

  const inputParams: InputParams = {
    onChange,
    onKeyDown,
    placeholder: `Enter ${placeholder}`,
    ref,
    value
  };

  if (placeholder === 'section id') inputParams['pattern'] = '^[89][0-9]{6}$';

  return (
    <Root>
      Current {placeholder}: <StyledEllipsis variant='ghost'>{defaultValue}</StyledEllipsis>
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
