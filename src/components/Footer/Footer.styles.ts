import styled from 'styled-components';

export const Root = styled.footer`
  display: flex;
  align-items: end;
  justify-content: end;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 7vw;
  max-height: 100px;
  background-color: ${(props) => props.theme.colors.bg};
  border-top: solid 1px ${(props) => props.theme.colors.primary};
  p {
    color: ${(props) => props.theme.colors.fg};
    margin-right: 15px;
  }
`;
