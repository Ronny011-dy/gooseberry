import styled from 'styled-components';

export const Root = styled.div`
  margin-top: 10vh;
  min-height: 90vh;
  height: fit-content;
  gap: 25px;
  padding-bottom: 10vh;
  color: ${(props) => props.theme.colors.fg};
  text-align: center;
`;

export const StyledReactLink = styled.a`
  color: ${(props) => props.theme.constantColors.secondary};
  text-decoration: none;
  font-weight: bold;
  transition: filter 300ms;
  &:hover {
    filter: drop-shadow(
      0 0 1em ${(props) => props.theme.constantColors.secondary}
    );
  }
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

export const StyledDetailsWrapper = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledHeroParagraph = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-style: italic;
  font-weight: bold;
  border: solid 1px ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 15px;
  overflow-wrap: break-word;
  text-align: center;
`;
