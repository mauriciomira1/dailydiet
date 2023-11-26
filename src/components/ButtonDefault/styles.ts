import { TouchableOpacity } from "react-native";
import styled, { DefaultTheme, css } from "styled-components/native";
import { Plus, PencilLine, Trash } from "phosphor-react-native";

type ButtonIconProps = {
  theme: DefaultTheme;
  invertedBtn?: boolean;
};

export const Container = styled(TouchableOpacity)<{ invertedBtn?: boolean }>`
  background-color: ${({ theme, invertedBtn }) =>
    invertedBtn ? theme.COLORS.WHITE : theme.COLORS.GRAY_2};

  border-color: ${({ theme, invertedBtn }) =>
    invertedBtn ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE};
  border-width: 1px;
  border-radius: 5px;
  padding: 16px;
  margin: 5px 0;
  gap: 8px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonTitle = styled.Text<{ invertedBtn?: boolean }>`
  ${({ theme, invertedBtn }) => css`
    color: ${invertedBtn ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
  `}
`;

export const ButtonIconPlus = styled(Plus).attrs<ButtonIconProps>(
  ({ theme, invertedBtn }) => ({
    size: 16,
    color: invertedBtn ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE,
  })
)``;

export const ButtonIconEdit = styled(PencilLine).attrs<ButtonIconProps>(
  ({ theme, invertedBtn }) => ({
    size: 16,
    color: invertedBtn ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE,
  })
)``;

export const ButtonIconDelete = styled(Trash).attrs<ButtonIconProps>(
  ({ theme, invertedBtn }) => ({
    size: 16,
    color: invertedBtn ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE,
  })
)``;
