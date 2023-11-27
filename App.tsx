import React from "react";
import { StatusBar } from "expo-status-bar";

import { ThemeProvider } from "styled-components/native";

import theme from "./src/theme";

import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";

import Loading from "@components/Loading";

import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar translucent style="auto" />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
