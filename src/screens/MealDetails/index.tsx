import React from "react";
import { Container, Description, Subtitle, Title } from "./styles";

import CardDefault from "@components/CardDefault";
import HeaderSecondary from "@components/HeaderSecondary";
import TagOnDiet from "@components/TagOnDiet";
import ButtonDefault from "@components/ButtonDefault";
import { View } from "react-native";

const MealDetails = () => {
  return (
    <Container>
      <HeaderSecondary title="Refeição" />

      <CardDefault>
        <View style={{ flex: 1, justifyContent: "space-between" }}>
          <View>
            <Title>Sanduíche</Title>

            <Description>
              Sanduíche de pão integral com atum e salada de alface e tomate
            </Description>

            <Subtitle>Data e hora</Subtitle>

            <Description>12/08/2022 às 16:00</Description>

            <TagOnDiet type="fora da dieta" />
          </View>

          <View>
            <ButtonDefault title="Editar Refeição" IconType="ButtonIconEdit" />
            <ButtonDefault
              title="Excluir refeição"
              invertedBtn
              IconType="ButtonIconDelete"
            />
          </View>
        </View>
      </CardDefault>
    </Container>
  );
};

export default MealDetails;
