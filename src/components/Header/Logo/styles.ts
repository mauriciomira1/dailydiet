import { ForkKnife } from "phosphor-react-native";
import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  gap: 2px;
  align-items: center;
`;

export const LogoText = styled.Text`
  font-size: 16px;
  line-height: 18px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const LogoIcon = styled(ForkKnife).attrs(({ theme }) => ({
  size: 40,
  color: theme.COLORS.GRAY_1,
}))`
  margin-bottom: 6px;
`;
