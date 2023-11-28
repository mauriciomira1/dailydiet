import React, { useCallback, useState } from "react";
import { Container, Description, Subtitle, Title } from "./styles";

import TagOnDiet from "@components/TagOnDiet";
import CardDefault from "@components/CardDefault";
import ButtonDefault from "@components/ButtonDefault";
import HeaderSecondary from "@components/HeaderSecondary";

import { View } from "react-native";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { mealsGetAll } from "@storage/meal/mealsGetAll";
import { MealProps } from "@storage/meal/mealCreate";
import Loading from "@components/Loading";
import mealRemoveById from "@storage/meal/mealRemoveById";

type RouteParams = {
  id: number;
};

const MealDetails = () => {
  const [meal, setMeal] = useState<MealProps>();
  const navigation = useNavigation();

  const router = useRoute();
  const { id } = router.params as RouteParams;

  const fetchMealData = async () => {
    const storage = await mealsGetAll();
    const meal = storage?.find((item) => item.id === id);
    setMeal(meal);
    console.log("Meal do mealdetails ------------>", meal);
  };

  useFocusEffect(
    useCallback(() => {
      fetchMealData();
    }, [])
  );

  const handleEditMeal = (id: number) => {
    navigation.navigate("new", { id });
  };

  const handleRemoveMeal = async (id: number) => {
    mealRemoveById(id);
    navigation.navigate("home");
  };

  return meal ? (
    <Container>
      <HeaderSecondary title="Refeição" />

      <CardDefault>
        <View style={{ flex: 1, justifyContent: "space-between" }}>
          <View>
            <Title>{meal.title}</Title>

            <Description>{meal.description}</Description>

            <Subtitle>Data e hora</Subtitle>

            <Description>
              {meal.date} às {meal.hour}
            </Description>

            {meal.onDiet ? (
              <TagOnDiet type="dentro da dieta" />
            ) : (
              <TagOnDiet type="fora da dieta" />
            )}
          </View>

          <View>
            <ButtonDefault
              title="Editar Refeição"
              IconType="ButtonIconEdit"
              handleOnPressFunction={() => handleEditMeal(id)}
            />
            <ButtonDefault
              title="Excluir refeição"
              invertedBtn
              IconType="ButtonIconDelete"
              handleOnPressFunction={() => handleRemoveMeal(id)}
            />
          </View>
        </View>
      </CardDefault>
    </Container>
  ) : (
    <Loading />
  );
};

export default MealDetails;
