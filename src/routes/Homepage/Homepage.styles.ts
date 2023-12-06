import styled, { css } from 'styled-components';

const centeredDiv = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Root = styled.div`
  ${centeredDiv};
  justify-content: space-around;
  min-height: 86vh;
  height: fit-content;
  h3 {
    color: ${(props) => props.theme.colors.fg};
  }
  div {
    ${centeredDiv};
  }
`;

export const StyledHeroBanner = styled.div`
  font-size: 1rem;
  p {
    color: ${(props) => props.theme.constantColors.primary};
    font-style: italic;
    font-weight: bold;
    border: solid 1px ${(props) => props.theme.constantColors.primary};
    border-radius: ${(props) => props.theme.borderRadius};
    padding: 15px;
    overflow-wrap: break-word;
  }
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
  margin-top: 15px;
  height: 4vw;
  width: 4vw;
  will-change: filter;
  transition: filter 300ms;
  color: ${(props) => props.theme.constantColors.primary};

  &:hover {
    filter: drop-shadow(
      0 0 2em ${(props) => props.theme.constantColors.primary}
    );
  }
`;

export const StyledSubtitle = styled.p`
  color: ${(props) => props.theme.colors.fg};
`;
