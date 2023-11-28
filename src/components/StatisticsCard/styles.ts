import { TouchableOpacity } from "react-native";
import styled, { css, useTheme } from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";
import { Float } from "react-native/Libraries/Types/CodegenTypes";
import { StatisticsPercentageProps } from ".";

export const Container = styled(TouchableOpacity)<StatisticsPercentageProps>`
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: ${({ percentage }) => {
    const { COLORS } = useTheme();
    return +percentage > 60 ? COLORS.PRIMARY_LIGHT : COLORS.SECONDARY_LIGHT;
  }};
`;

export const PercentageTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
    padding-bottom: 12px;
  `}
`;

export const ArrowIcon = styled(ArrowUpRight).attrs({
  size: 20,
})`
  margin-bottom: -10px;
`;
