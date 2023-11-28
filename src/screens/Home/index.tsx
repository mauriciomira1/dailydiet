import React, { useCallback, useEffect, useState } from "react";
import { Container } from "./styles";

import Header from "@components/Header";
import DayMeals from "@components/DayMeals";
import TextDefault from "@components/TextDefault";
import ButtonDefault from "@components/ButtonDefault";
import StatisticsCard from "@components/StatisticsCard";
import { ScrollView } from "react-native";

import { useFocusEffect, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { MealProps } from "@storage/meal/mealCreate";
import { generalStatistic } from "@utils/StatisticsCalc";

export type DataProps = MealProps;

const Home = () => {
  const [meals, setMeals] = useState<MealProps[]>([]);
  const [statisticValue, setStatisticValue] = useState(0);

  const navigation = useNavigation();

  const statisticsCalc = async () => {
    const general = await generalStatistic();
    general && setStatisticValue(general * 100);
  };

  const handleNewMeal = () => {
    navigation.navigate("new", {});
  };

  useFocusEffect(
    useCallback(() => {
      const fetchMeals = async () => {
        try {
          const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

          storage && setMeals(JSON.parse(storage));
        } catch (error) {
          console.log("Erro na Home ------------> ", error);
        }
      };
      fetchMeals();
      statisticsCalc();
    }, [meals])
  );

  /*   useEffect(() => {
    const fetchMeals = async () => {
      try {
        const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

        storage && setMeals(JSON.parse(storage));
      } catch (error) {
        console.log("Erro na Home ------------> ", error);
      }
    };
    fetchMeals();
  }, [meals]); */

  return (
    <ScrollView style={{ backgroundColor: "#FFFFFF" }}>
      <Container>
        <Header />
        <StatisticsCard percentage={statisticValue} />
        <TextDefault description="Refeições" style={{ marginTop: 30 }} />
        <ButtonDefault
          title="Nova refeição"
          IconType="ButtonIconPlus"
          handleOnPressFunction={handleNewMeal}
        />
        {meals.length > 0 && <DayMeals DATA={meals} />}
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
