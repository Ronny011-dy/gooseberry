import styled from 'styled-components';

export const Root = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  background-color: ${(props) => props.theme.constantColors.primary};
  width: 100%;
  height: 7vw;
  max-height: 100px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  border-bottom: solid 1px ${(props) => props.theme.constantColors.black};

  img {
    height: 3vw;
    max-height: 43.2px;
  }
  h1 {
    font-size: 2rem;
  }
  button {
    background-color: ${(props) => props.theme.constantColors.white};
    border: none;
    border-radius: ${(props) => props.theme.borderRadius};
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
        rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
        rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    }
    &:active {
      margin-top: 4px;
      box-shadow: none;
    }
  }
`;

export const StyledLogoWrapper = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4vw;
  width: 4vw;
  max-height: 57.6px;
  max-width: 57.6px;
`;

export const StyledLogoLink = styled.a`
  color: ${(props) => props.theme.constantColors.black};
  padding-left: 30px;
  display: flex;
  flex-direction: row;
  text-decoration: none;
  gap: 30px;
  align-items: center;
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
    color: ${(props) => props.theme.colors.fg};
    background-color: ${(props) => props.theme.colors.bg};
    font-weight: bold;
    height: fit-content;
    width: 11ch;
    cursor: pointer;
    padding: 10px;
  }
`;
