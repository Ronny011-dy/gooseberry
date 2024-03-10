import styled from 'styled-components';

export const Root = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledLogo = styled.a`
  display: flex;
  margin-top: 15px;
  height: 4vw;
  width: 4vw;
  max-height: 57.6px;
  max-width: 57.6px;
  will-change: filter;
  transition: filter 300ms;
  color: ${(props) => props.theme.colors.primary};

  &:hover {
    filter: drop-shadow(0 0 2em ${(props) => props.theme.colors.primary});
  }
`;

export const StyledReactLink = styled.a`
  color: ${(props) => props.theme.constantColors.secondary};
  text-decoration: none;
  font-weight: bold;
  transition: filter 300ms;
  &:hover {
    filter: drop-shadow(0 0 1em ${(props) => props.theme.constantColors.secondary});
  }
`;
