import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
  margin-top: 30px;
`;
