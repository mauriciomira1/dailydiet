import React from "react";
import {
  Container,
  DataArea,
  Description,
  ShortDataArea,
  Title,
  ValueTitle,
} from "./styles";
import { useTheme } from "styled-components/native";

const StatisticsArea = () => {
  const { COLORS } = useTheme();

  return (
    <Container>
      <Title>Estatísticas gerais</Title>

      <DataArea style={{ backgroundColor: COLORS.GRAY_6 }}>
        <ValueTitle>22</ValueTitle>
        <Description>melhor sequência de pratos dentro da dieta</Description>
      </DataArea>

      <DataArea style={{ backgroundColor: COLORS.GRAY_6 }}>
        <ValueTitle>109</ValueTitle>
        <Description>refeições registradas</Description>
      </DataArea>

      <ShortDataArea>
        <DataArea style={{ backgroundColor: COLORS.PRIMARY_LIGHT }}>
          <ValueTitle>109</ValueTitle>
          <Description>refeições dentro da dieta</Description>
        </DataArea>

        <DataArea style={{ backgroundColor: COLORS.SECONDARY_LIGHT }}>
          <ValueTitle>109</ValueTitle>
          <Description>refeições fora da dieta</Description>
        </DataArea>
      </ShortDataArea>
    </Container>
  );
};

export default StatisticsArea;
