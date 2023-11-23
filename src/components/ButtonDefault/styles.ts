import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { Plus } from "phosphor-react-native";

export const Container = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_2};

  border-radius: 5px;
  padding: 16px;
  margin: 5px 0;
  gap: 8px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
  `}
`;

export const ButtonIcon = styled(Plus).attrs(({ theme }) => ({
  size: 16,
  color: theme.COLORS.WHITE,
}))``;
