import React, { useEffect, useState } from "react";
import { Container } from "./styles";

import Header from "@components/Header";
import DayMeals from "@components/DayMeals";
import TextDefault from "@components/TextDefault";
import ButtonDefault from "@components/ButtonDefault";
import StatisticsCard from "@components/StatisticsCard";
import { ScrollView } from "react-native";
import StatisticsArea from "@components/StatisticsArea";
import StatisticsBigCard from "@components/StatisticsBigCard";

import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { MealProps } from "@storage/meal/mealCreate";

export type DataProps = MealProps;

const Home = () => {
  const [meals, setMeals] = useState<MealProps[]>([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

        storage && setMeals(JSON.parse(storage));
      } catch (error) {
        console.log(error);
      }
    };
    fetchMeals();
  }, []);

  const navigation = useNavigation();

  const handleNewMeal = () => {
    navigation.navigate("new");
  };

  return (
    <ScrollView>
      <Container>
        <Header />
        <StatisticsCard percentage={92.16} />
        <TextDefault description="Refeições" style={{ marginTop: 30 }} />
        <ButtonDefault
          title="Nova refeição"
          IconType="ButtonIconPlus"
          handleOnPressFunction={handleNewMeal}
        />
        <DayMeals DATA={meals} />
      </Container>
    </ScrollView>
    /*     <>
      <StatisticsBigCard percentage={42.16} />
      <StatisticsArea />
    </> */
  );
};

export default Home;
function useEffects() {
  throw new Error("Function not implemented.");
}
