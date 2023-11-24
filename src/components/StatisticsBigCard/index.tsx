import React from "react";
import {
  BackIconButton,
  Container,
  Description,
  PercentageTitle,
} from "./styles";
import { TouchableOpacity, View } from "react-native";
import { Float } from "react-native/Libraries/Types/CodegenTypes";
import { useTheme } from "styled-components/native";

type Props = {
  percentage: Float;
};

const StatisticsBigCard = ({ percentage }: Props) => {
  const { COLORS } = useTheme();

  return (
    <Container percentage={percentage}>
      <TouchableOpacity
        style={{ width: 100, alignSelf: "baseline", marginLeft: -20 }}
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
