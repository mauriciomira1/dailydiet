import React, { useState, useRef } from "react";

import { TextInput, View } from "react-native";

import { Container, DividedView } from "./styles";

import InputItemName from "./InputItemName";

import CardDefault from "@components/CardDefault";
import ButtonDefault from "@components/ButtonDefault";
import HeaderSecondary from "@components/HeaderSecondary";
import CheckboxWithTitle from "@components/CheckboxWithTitle";

const NewMeal = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [onDiet, setOnDiet] = useState<boolean>();

  const nextInput = useRef<TextInput>(null);

  const [selected, setSelected] = useState(false);

  const handleNextFocusOnEnterClick = () => {
    if (nextInput.current) {
      nextInput.current.focus();
    }
  };

  return (
    <Container>
      <HeaderSecondary title="Nova refeição" />

      <CardDefault>
        <InputItemName
          title="Nome"
          returnKeyType="next"
          onSubmitEditing={handleNextFocusOnEnterClick}
          blurOnSubmit={false}
        />
        <InputItemName title="Descrição" ref={nextInput} />
        {/*         <>
          <TextInput
            returnKeyType="next"
            onSubmitEditing={handleNextFocusOnEnterClick}
            blurOnSubmit={false}
          />
          <TextInput ref={nextInput} />
        </> */}

        <DividedView>
          <InputItemName title="Data" />
          <InputItemName title="Hora" />
        </DividedView>

        <CheckboxWithTitle />

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
