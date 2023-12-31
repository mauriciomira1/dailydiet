import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { View } from "react-native";

import { useTheme } from "styled-components/native";
import { AppRoutes } from "./app.routes";

export const Routes = () => {
  const { COLORS } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.WHITE }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
};
