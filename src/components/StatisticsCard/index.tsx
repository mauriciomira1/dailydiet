import React from "react";
import { ArrowIcon, Container, Description, PercentageTitle } from "./styles";
import { View } from "react-native";
import { useTheme } from "styled-components/native";

export type StatisticsPercentageProps = {
  percentage: number;
  handleOpenStatisticsPage: () => void;
};

const StatisticsCard = ({
  percentage,
  handleOpenStatisticsPage,
}: StatisticsPercentageProps) => {
  const { COLORS } = useTheme();

  return (
    <Container percentage={percentage} onPress={handleOpenStatisticsPage}>
      <View style={{ width: "100%", alignItems: "flex-end" }}>
        <ArrowIcon
          color={+percentage > 60 ? COLORS.PRIMARY_DARK : COLORS.SECONDARY_DARK}
        />
      </View>
      <PercentageTitle>{parseFloat(percentage.toFixed(2))}%</PercentageTitle>
      <Description>das refeições dentro da dieta</Description>
    </Container>
  );
};

export default StatisticsCard;
