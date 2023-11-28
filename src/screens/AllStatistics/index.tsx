import React, { useCallback, useState } from "react";

import { Container } from "./styles";
import StatisticsBigCard from "@components/StatisticsBigCard";
import StatisticsArea from "@components/StatisticsArea";
import { mealsGetAll } from "@storage/meal/mealsGetAll";
import { sortMealByDateAndHour } from "@utils/sortMealByDateAndHour";
import { useFocusEffect } from "@react-navigation/native";
import { generalStatistic } from "@utils/statisticsCalc";

type StatisticsDataProps = {
  betterMealSequence: number;
  registeredMealsQuantity: number;
  onDietMealsQuantity: number;
  outDietMealsQuantity: number;
};

const AllStatistics = () => {
  const [statisticsData, setStatisticsData] = useState<StatisticsDataProps>();
  const [statisticValue, setStatisticValue] = useState(0);

  const statisticsCalc = async () => {
    const general = await generalStatistic();
    general && setStatisticValue(general * 100);
  };

  const fetchMealsStatistics = async () => {
    const storage = await mealsGetAll();

    if (storage) {
      const betterSeq = sortMealByDateAndHour(storage).length;
      const registeredMeals = storage.length;
      const onDietMeals = storage.filter((meal) => meal.onDiet).length;
      const outDietMeals = registeredMeals - onDietMeals;

      setStatisticsData({
        betterMealSequence: betterSeq,
        registeredMealsQuantity: registeredMeals,
        onDietMealsQuantity: onDietMeals,
        outDietMealsQuantity: outDietMeals,
      });
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchMealsStatistics();
      statisticsCalc();
    }, [])
  );

  return (
    <Container>
      <StatisticsBigCard percentage={statisticValue.toFixed(2)} />
      {statisticsData && (
        <StatisticsArea
          betterMealSequence={statisticsData.betterMealSequence}
          onDietMealsQuantity={statisticsData.onDietMealsQuantity}
          outDietMealsQuantity={statisticsData.outDietMealsQuantity}
          registeredMealsQuantity={statisticsData.registeredMealsQuantity}
        />
      )}
    </Container>
  );
};

export default AllStatistics;
