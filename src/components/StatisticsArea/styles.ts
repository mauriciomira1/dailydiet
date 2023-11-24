import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex: 1;

  gap: 10px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  box-shadow: 10px 10px 10px ${({ theme }) => theme.COLORS.GRAY_4};
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  padding: 24px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};

    color: ${theme.COLORS.GRAY_1};
  `}
  text-align: center;
  padding-bottom: 14px;
`;

export const DataArea = styled.View`
  gap: 4px;
  flex: 1;

  border-radius: 8px;

  align-items: center;
  justify-content: center;

  padding: 16px 14px;
`;

export const ShortDataArea = styled.View`
  flex-direction: row;
  gap: 16px;
`;

export const ValueTitle = styled.Text`
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

    padding-bottom: 4px;

    text-align: center;
  `}
`;
