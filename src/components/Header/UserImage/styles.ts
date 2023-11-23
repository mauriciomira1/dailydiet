import styled from "styled-components/native";

export const Container = styled.View`
  border-radius: 50px;
  border-width: 3px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_2};
  height: 46px;
  width: 46px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const Photo = styled.Image`
  height: 68px;
  width: 68px;
  border-radius: 30px;
`;
