import React from "react";
import { StatusBar } from "expo-status-bar";

import { ThemeProvider } from "styled-components/native";

import theme from "./src/theme";

import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";

import Home from "@screens/Home";

import Loading from "@components/Loading";
import NewMeal from "@screens/NewMeal";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar translucent style="auto" />
      {/* {fontsLoaded ? <Home /> : <Loading />} */}
      {fontsLoaded ? <NewMeal /> : <Loading />}
    </ThemeProvider>
  );
}
