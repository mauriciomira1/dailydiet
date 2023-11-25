import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
`;

export const TitleArea = styled.View``;

export const ContentArea = styled.View``;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};

    color: ${theme.COLORS.GRAY_1};
  `}
  text-align: center;
  padding: 14px 0 22px 0;
`;

export const DividedView = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  gap: 18px;
`;
