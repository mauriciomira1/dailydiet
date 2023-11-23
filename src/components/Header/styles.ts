import styled from "styled-components/native";

export const Container = styled.View`
  height: 100px;
  width: 100%;

  align-items: center;
  justify-content: space-between;

  flex-direction: row;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;
