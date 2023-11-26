import styled, { css } from "styled-components/native";

export type IconProps = {
  type: "dentro da dieta" | "fora da dieta";
};

export const Container = styled.View`
  gap: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 140px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
  padding: 6px;
  border-radius: 20px;
`;

export const ButtonIcon = styled.View<IconProps>`
  border-radius: 10px;

  width: 8px;
  height: 8px;
  margin-top: 1px;

  background-color: ${({ theme, type }) =>
    type === "dentro da dieta"
      ? theme.COLORS.PRIMARY_DARK
      : theme.COLORS.SECONDARY_DARK};
`;

export const ButtonTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  margin-bottom: 2px;
`;
