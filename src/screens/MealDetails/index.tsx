import CardDefault from "@components/CardDefault";
import React from "react";
import { Container, Description, Subtitle, Title } from "./styles";
import HeaderSecondary from "@components/HeaderSecondary";
import TagOnDiet from "@components/TagOnDiet";
import ButtonDefault from "@components/ButtonDefault";

const MealDetails = () => {
  return (
    <Container>
      <HeaderSecondary title="Refeição" />

      <CardDefault>
        <Title>Sanduíche</Title>

        <Description>
          Sanduíche de pão integral com atum e salada de alface e tomate
        </Description>

        <Subtitle>Data e hora</Subtitle>

        <Description>12/08/2022 às 16:00</Description>

        <TagOnDiet type="fora da dieta" />
        <ButtonDefault title="Editar Refeição" IconType="ButtonIconEdit" />
        <ButtonDefault
          title="Excluir refeição"
          invertedBtn
          IconType="ButtonIconDelete"
        />
      </CardDefault>
    </Container>
  );
};

export default MealDetails;
