import React from "react";
import { View } from "react-native";
import { useFonts, DMSans_400Regular } from "@expo-google-fonts/dm-sans";
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular,
  });

  //Carregar as fontes primeiramente antes de renderizar o App
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <ThemeProvider theme={theme}></ThemeProvider>;
}
