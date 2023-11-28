import React from "react";
import {
  BackIconButton,
  Container,
  Description,
  PercentageTitle,
} from "./styles";
import { TouchableOpacity, View } from "react-native";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

type Props = {
  percentage: string;
};

const StatisticsBigCard = ({ percentage }: Props) => {
  const { COLORS } = useTheme();

  const navigation = useNavigation();

  const handleBackToHome = () => {
    navigation.navigate("home");
  };

  return (
    <Container percentage={percentage}>
      <TouchableOpacity
        style={{ width: 100, alignSelf: "baseline", marginLeft: -20 }}
        onPress={handleBackToHome}
      >
        <BackIconButton />
      </TouchableOpacity>
      <View style={{ width: "100%", alignItems: "flex-end" }}></View>
      <PercentageTitle>{percentage}%</PercentageTitle>
      <Description>das refeições dentro da dieta</Description>
    </Container>
  );
};

export default StatisticsBigCard;
