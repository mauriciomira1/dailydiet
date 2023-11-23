import { TouchableOpacity, ViewProps } from "react-native";
import styled, { css } from "styled-components/native";
import { useTheme } from "styled-components/native";

type StatusProps = {
  onDiet?: boolean;
};

export const Container = styled(TouchableOpacity)`
  border-radius: 5px;
  ${({ theme }) => css`
    border-color: ${theme.COLORS.GRAY_5};
    border-width: 1px;
  `}
  padding: 16px 0;

  width: 100%;

  flex-direction: row;
  align-items: center;
`;

export const TimeInfo = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};

    border-color: ${theme.COLORS.GRAY_3};
    border-right-width: 0.5px;
  `}

  text-align: center;
  width: 56px;
`;

export const MealName = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `}
  padding: 0 10px;

  flex: 1;
`;

export const Status = styled.View<StatusProps>`
  border-radius: 10px;

  height: 15px;
  width: 15px;

  margin: 0 16px;

  background-color: ${({ onDiet }) => {
    const { COLORS } = useTheme();
    return onDiet ? COLORS.PRIMARY_LIGHT : COLORS.SECONDARY_LIGHT;
  }};
`;
