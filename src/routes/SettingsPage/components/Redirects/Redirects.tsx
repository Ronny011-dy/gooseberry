import type { FC } from 'react';
import { Link } from 'react-router-dom';

import { Root, StyledButton, StyledSeparator } from './Redirects.styles';

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
        <StyledButton variant='ghost'>Admin</StyledButton>
      </Link>
      <StyledSeparator
        color='amber'
        orientation='vertical'
      />
      <Link to={redirectUrl(scriptId)}>
        <StyledButton variant='ghost'>Bridge</StyledButton>
      </Link>
    </Root>
  );
};
