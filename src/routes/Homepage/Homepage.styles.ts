import styled, { css } from 'styled-components';

type RootProps = {
  isOverflowing: boolean;
};

export const Root = styled.div<RootProps>(
  ({ isOverflowing }) => css`
    margin-top: 10vh;
    min-height: 90vh;
    height: fit-content;
    gap: 25px;
    padding-bottom: ${isOverflowing ? '10' : '0'}vh;
    color: ${(props) => props.theme.colors.fg};
    text-align: center;
  `
);

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
