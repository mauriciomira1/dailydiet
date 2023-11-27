import React, { useState, useRef } from "react";

import { TextInput, View } from "react-native";

import { Container, DividedView } from "./styles";

import InputItemName from "./InputItemName";

import CardDefault from "@components/CardDefault";
import ButtonDefault from "@components/ButtonDefault";
import HeaderSecondary from "@components/HeaderSecondary";
import CheckboxWithTitle from "@components/CheckboxWithTitle";
import { useNavigation } from "@react-navigation/native";

const NewMeal = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [onDiet, setOnDiet] = useState<boolean>();
  const [selected, setSelected] = useState(false);

  const navigation = useNavigation();

  const nextInput = useRef<TextInput>(null);

  const handleNextFocusOnEnterClick = () => {
    if (nextInput.current) {
      nextInput.current.focus();
    }
  };

  const handleCreateMeal = () => {
    navigation.navigate("home");
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
          <InputItemName title="Data" placeholder="01.12.23" />
          <InputItemName title="Hora" placeholder="00:00" />
        </DividedView>

        <CheckboxWithTitle />

        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <ButtonDefault
            title="Cadastrar refeição"
            handleOnPressFunction={handleCreateMeal}
          />
        </View>
      </CardDefault>
    </Container>
  );
};

export default NewMeal;
