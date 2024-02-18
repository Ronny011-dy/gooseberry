import { Button } from '@radix-ui/themes';
import { FC, InputHTMLAttributes } from 'react';

import { Root, StyledInput } from './InputWithButton.styles';

export type InputWithButtonProps = Partial<InputHTMLAttributes<HTMLInputElement>> & {
  buttonCallback: () => void;
  buttonLabel: string;
  inputRef: React.RefObject<HTMLInputElement>;
};

export const InputWithButton: FC<InputWithButtonProps> = ({
  buttonLabel,
  buttonCallback,
  inputRef,
  ...inputParams
}) => {
  return (
    <Root>
      <StyledInput
        ref={inputRef}
        {...inputParams}
      />
      <Button
        variant='outline'
        onClick={buttonCallback}
      >
        {buttonLabel}
      </Button>
    </Root>
  );
};
