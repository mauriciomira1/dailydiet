import styled, { css } from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
  width: 100%;
  padding: 20px 14px 26px 14px;
`;

export const Icon = styled(TouchableOpacity)`
  width: 50px;
  height: 50px;
  position: absolute;
  left: 12px;
  top: 6px;

  z-index: 1;

  align-items: center;
  justify-content: center;
`;

export const IconButton = styled(ArrowLeft).attrs({
  size: 25,
})`
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};

    color: ${theme.COLORS.GRAY_1};
  `}
  text-align: center;
`;
