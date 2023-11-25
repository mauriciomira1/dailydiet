import React, { useState } from "react";
import { Container, DividedView, Title } from "./styles";
import CardDefault from "@components/CardDefault";
import InputItemName from "./InputItemName";
import CheckboxWithTitle from "@components/CheckboxWithTitle";
import ButtonDefault from "@components/ButtonDefault";
import { View } from "react-native";

const NewMeal = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [onDiet, setOnDiet] = useState<boolean>();

  return (
    <Container>
      <Title>Nova refeição</Title>
      <CardDefault>
        <>
          <InputItemName title="Nome" />
          <InputItemName title="Nome" />
          <DividedView>
            <InputItemName title="Nome" />
            <InputItemName title="Nome" />
          </DividedView>
          <CheckboxWithTitle />
        </>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <ButtonDefault title="Cadastrar refeição" />
        </View>
      </CardDefault>
    </Container>
  );
};

export default NewMeal;
