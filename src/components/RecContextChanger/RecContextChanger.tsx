import { GearIcon } from '@radix-ui/react-icons';
import { Button, TextField } from '@radix-ui/themes';
import { ChangeEvent, useRef, useState } from 'react';
import { PageContext, setDYContext } from '../../utils/setDYContext';
import toast from 'react-hot-toast';
import { Root } from './RecContextChanger.styles';

type ContextChangerProps = { type: PageContext };

export const RecContextChanger: React.FC<ContextChangerProps> = ({ type }) => {
  const [contextData, setContextData] = useState('');
  const textInputRef = useRef<HTMLInputElement>(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContextData(e.target.value);
  };

  const handleClick = () => {
    contextData && setDYContext(type, [contextData]);
    toast.success(
      `Context changed to ${JSON.stringify(
        (window as any).DY.recommendationContext
      )}`
    );
    setContextData('');
  };

  const handleTextInputKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleClick();
      textInputRef.current?.blur();
    }
  };
  return (
    <Root>
      <TextField.Root>
        <TextField.Slot>
          <GearIcon height="16" width="16" />
        </TextField.Slot>
        <TextField.Input
          placeholder="Enter context data to change"
          value={contextData}
          ref={textInputRef}
          onChange={handleChange}
          onKeyDown={handleTextInputKeyDown}
        />
      </TextField.Root>
      <Button variant="outline" onClick={handleClick}>
        Change
      </Button>
    </Root>
  );
};
