import React, { useEffect, useState, useCallback } from "react";

import { View } from "react-native";

import { Container, DividedView } from "./styles";

import InputItemName from "./InputItemName";

import CardDefault from "@components/CardDefault";
import ButtonDefault from "@components/ButtonDefault";
import HeaderSecondary from "@components/HeaderSecondary";
import CheckboxWithTitle from "@components/CheckboxWithTitle";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { MealProps, mealCreate } from "@storage/meal/mealCreate";
import { mealsGetAll } from "@storage/meal/mealsGetAll";

type RouteParams = {
  id: number;
};

const NewMeal = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [onDiet, setOnDiet] = useState<boolean>(false);
  const [meal, setMeal] = useState<MealProps>();

  const route = useRoute();
  const { id } = route.params as RouteParams;
  const navigation = useNavigation();

  const fetchMealData = async () => {
    try {
      const storage = await mealsGetAll();
      const meal = storage?.find((meal) => meal.id === id);
      meal && setMeal(meal);
      meal &&
        (setTitle(meal.title),
        setDescription(meal.description),
        setDate(meal.date),
        setHour(meal.hour),
        setOnDiet(meal.onDiet));

      console.log(meal);
    } catch (error) {
      console.log("Erro na NewMeal(fetchMealData)--------------->", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchMealData();
    }, [])
  );

  /*   useEffect(() => {

  }, []); */

  type InputNameProps = "title" | "description" | "date" | "hour" | "onDiet";

  const handleChangeText = (inputName: InputNameProps) => (text: string) => {
    switch (inputName) {
      case "title":
        setTitle(text);
        break;
      case "description":
        setDescription(text);
        break;
      case "date":
        setDate(text);
        break;
      case "hour":
        setHour(text);
        break;
      case "onDiet":
        break;
    }
  };

  const handleOnDietToogle = (selector = false) => {
    setOnDiet(selector);
  };

  const handleCreateMeal = async () => {
    const meal = { date, hour, onDiet, title, description };

    try {
      {
        await mealCreate(meal);
      }
    } catch (error) {
      console.log("Erro em NewMeal ------------->", error);
    }

    navigation.navigate("home");
  };

  return (
    <Container>
      <HeaderSecondary title="Nova refeição" />

      <CardDefault>
        <InputItemName
          title="Nome"
          value={title}
          onChangeText={handleChangeText("title")}
          maxLength={40}
        />
        <InputItemName
          title="Descrição"
          value={description}
          onChangeText={handleChangeText("description")}
          maxLength={250}
        />

        <DividedView>
          <InputItemName
            title="Data"
            placeholder="01/12/23"
            value={date}
            onChangeText={handleChangeText("date")}
            maxLength={8}
          />
          <InputItemName
            title="Hora"
            placeholder="00:00"
            value={hour}
            onChangeText={handleChangeText("hour")}
            maxLength={5}
          />
        </DividedView>

        <CheckboxWithTitle handleOnDietToogle={handleOnDietToogle} />

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
function useCallBacl(): void | (() => void) | undefined {
  throw new Error("Function not implemented.");
}
