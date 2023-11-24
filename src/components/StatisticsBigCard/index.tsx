import React from "react";
import { ArrowIcon, Container, Description, PercentageTitle } from "./styles";
import { View } from "react-native";
import { Float } from "react-native/Libraries/Types/CodegenTypes";
import { useTheme } from "styled-components/native";

type Props = {
  percentage: Float;
};

const StatisticsCard = ({ percentage }: Props) => {
  const { COLORS } = useTheme();

  return (
    <Container percentage={percentage}>
      <View style={{ width: "100%", alignItems: "flex-end" }}>
        <ArrowIcon
          color={percentage > 60 ? COLORS.PRIMARY_DARK : COLORS.SECONDARY_DARK}
        />
      </View>
      <PercentageTitle>{percentage}%</PercentageTitle>
      <Description>das refeições dentro da dieta</Description>
    </Container>
  );
};

export default StatisticsCard;
