import styled, { css } from "styled-components/native";

export const Container = styled.View`
  gap: 6px;
`;

export const ButtonSection = styled.View`
  gap: 10px;
  margin-bottom: 24px;
  min-width: 46%;
  flex-direction: row;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
