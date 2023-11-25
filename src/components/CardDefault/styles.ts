import { Platform } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.WHITE};

  border-top-left-radius: 18px;
  border-top-right-radius: 18px;

  padding: 24px;

  ${Platform.select({
    ios: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: -20 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    android: {
      elevation: 1,
    },
  })}
`;
