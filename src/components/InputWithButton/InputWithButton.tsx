import { Button } from '@radix-ui/themes';
import { type FC, type InputHTMLAttributes, ChangeEvent, RefObject, ElementRef } from 'react';

import { Root, StyledInput } from './InputWithButton.styles';

export type InputWithButtonProps = Partial<InputHTMLAttributes<HTMLInputElement>> & {
  buttonCallback: () => void;
  buttonLabel: string;
  inputRef: RefObject<ElementRef<'input'>>;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

export const InputWithButton: FC<InputWithButtonProps> = ({
  buttonLabel,
  buttonCallback,
  inputRef,
  inputValue,
  setInputValue,
  ...inputParams
}) => {
  const { value, ...restofInputParams } = inputParams;

  const onClick = () => {
    buttonCallback();
    setInputValue('');
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onClick();
      inputRef.current?.blur();
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <Root>
      <StyledInput
        ref={inputRef}
        value={inputValue}
        onChange={onChange}
        onKeyDown={onKeyDown}
        {...restofInputParams}
      />
      <Button
        variant='outline'
        onClick={onClick}
      >
        {buttonLabel}
      </Button>
    </Root>
  );
};
