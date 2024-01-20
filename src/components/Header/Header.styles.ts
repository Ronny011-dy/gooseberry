import { Button } from '@radix-ui/themes';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Root = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  width: 100%;
  height: 10vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  border-bottom: 1px solid ${(props) => props.theme.colors.fga};
`;

export const StyledLogoWrapper = styled(Button)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4vh;
  width: 4vh;
  img {
    height: 3vh;
    width: 3vh;
  }
`;

export const StyledLogoLink = styled(Link)`
  color: ${(props) => props.theme.constantColors.black};
  padding-left: 30px;
  display: flex;
  flex-direction: row;
  text-decoration: none;
  gap: 30px;
  align-items: center;
  width: fit-content;
`;

export const StyledNavigation = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
  a {
    height: fit-content;
  }
  button {
    font-weight: bold;
    width: 11ch;
  }
`;

export const StyledLink = styled(Link)`
  width: fit-content;
`;

export const StyledButton = styled(Button)`
  color: ${(props) => props.theme.constantColors.black};
`;
