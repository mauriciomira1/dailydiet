import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonIconStyleProps = "SIM" | "NÃO";

type IconProps = {
  type: ButtonIconStyleProps;
};

type ContainerProps = {
  type: ButtonIconStyleProps;
  selected: boolean;
};

export const Container = styled(TouchableOpacity)<ContainerProps>`
  background-color: ${({ theme, selected, type }) => {
    if (selected && type === "SIM") {
      return theme.COLORS.PRIMARY_LIGHT;
    } else if (selected && type === "NÃO") {
      return theme.COLORS.SECONDARY_LIGHT;
    }
    return theme.COLORS.GRAY_6;
  }};

  border-radius: 5px;

  align-items: center;
  justify-content: center;

  flex-direction: row;
  gap: 8px;

  flex: 1;

  height: 48px;

  border-width: ${({ selected }) => (selected ? "1px" : "0px")};

  border-color: ${({ theme, type }) =>
    type === "SIM" ? theme.COLORS.PRIMARY_DARK : theme.COLORS.SECONDARY_DARK};
`;

export const ButtonTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const ButtonIcon = styled.View<IconProps>`
  border-radius: 10px;

  width: 8px;
  height: 8px;

  background-color: ${({ theme, type }) =>
    type === "SIM" ? theme.COLORS.PRIMARY_DARK : theme.COLORS.SECONDARY_DARK};
`;
