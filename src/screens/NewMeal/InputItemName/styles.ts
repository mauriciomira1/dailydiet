import styled, { css } from "styled-components/native";

export const Container = styled.View`
  gap: 5px;
  margin-bottom: 24px;
  min-width: 46%;
`;

export const InputTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const InputData = styled.TextInput`
  padding: 10px;
  border-radius: 5px;
  width: 100%;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    background-color: ${theme.COLORS.WHITE};

    border: 0.5px solid ${theme.COLORS.GRAY_4};
  `}
`;
