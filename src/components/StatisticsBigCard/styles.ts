import { TouchableOpacity } from "react-native";
import styled, { css, useTheme } from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";
import { Float } from "react-native/Libraries/Types/CodegenTypes";

type ContainerProps = {
  percentage: Float;
};

export const Container = styled.View<ContainerProps>`
  margin-bottom: -10px;
  padding: 50px;

  align-items: center;

  background-color: ${({ percentage }) => {
    const { COLORS } = useTheme();
    return percentage > 60 ? COLORS.PRIMARY_LIGHT : COLORS.SECONDARY_LIGHT;
  }};
`;

export const PercentageTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
  margin-top: 20px;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
    padding-bottom: 12px;
  `}
`;

export const BackIconButton = styled(ArrowLeft).attrs({
  size: 25,
})`
  color: ${({ theme }) => theme.COLORS.PRIMARY_DARK};
`;
