import type { FC } from 'react';
import { Button } from '@radix-ui/themes';
import { Link } from 'react-router-dom';

import { Root, StyledSeparator } from './Redirects.styles';

const redirectUrl = (section: string, isAdmin = false) =>
  `https://adm.dynamicyield.${section[0] === '8' ? 'com' : 'eu'}/${
    isAdmin ? `r?redirectToSectionId=${section}` : `bridge#/sites/${section}/features`
  }`;

interface Props {
  scriptId: string;
}

export const Redirects: FC<Props> = ({ scriptId }) => {
  return (
    <Root>
      <Link to={redirectUrl(scriptId, true)}>
        <Button variant='ghost'>Admin</Button>
      </Link>
      <StyledSeparator
        color='amber'
        orientation='vertical'
      />
      <Link to={redirectUrl(scriptId)}>
        <Button variant='ghost'>Bridge</Button>
      </Link>
    </Root>
  );
};
