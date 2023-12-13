import { useEffect } from 'react';
import { Root } from './SettingsPage.styles';
import { setDYContext } from '../../utils/setDYContext';

type SettingsPageProps = {};

export const SettingsPage: React.FC<SettingsPageProps> = () => {
  const type = 'OTHER';
  useEffect(() => {
    setDYContext(type);
  });
  return (
    <Root>
      Just a settings page. Move along{' '}
      {/* {(window as any).DY.recommendationContext.type}
      {(window as any).DY.recommendationContext.data} */}
    </Root>
  );
};
