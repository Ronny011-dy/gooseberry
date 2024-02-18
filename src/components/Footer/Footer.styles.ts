import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  align-self: center;
  margin-left: 35px;
`;

export const Root = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 10vh;
  background-color: ${(props) => props.theme.colors.bg};
  border-top: solid 1px ${(props) => props.theme.colors.primary};
  justify-content: space-between;
  p {
    align-self: flex-end;
    color: ${(props) => props.theme.colors.fg};
    margin-right: 15px;
  }
`;
