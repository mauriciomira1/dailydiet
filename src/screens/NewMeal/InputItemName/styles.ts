import { TextInputProps } from "react-native";
import styled, { css } from "styled-components/native";

type ContainerProps = TextInputProps & {};

export const Container = styled.View<ContainerProps>`
  gap: 5px;
  margin-bottom: 24px;
  min-width: 46%;
`;

export const InputTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const InputData = styled.TextInput<{ selected?: boolean }>`
  padding: 10px;
  border-radius: 5px;
  width: 100%;

  ${({ theme, selected }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    background-color: ${theme.COLORS.WHITE};

    border: 0.5px solid ${selected ? theme.COLORS.GRAY_2 : theme.COLORS.GRAY_4};
  `}
`;
