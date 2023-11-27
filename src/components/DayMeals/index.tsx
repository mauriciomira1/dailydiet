import React from "react";
import { Container, Title } from "./styles";
import MealDetailsTimeCard from "./MealDetailsTimeCard";
import { View, ViewProps } from "react-native";
import { DataProps } from "@screens/Home";

type Props = ViewProps & {
  DATA: DataProps[];
};

/* 
meal: = {
  id: number,
  date: string, // Formato dd/MM/yyyy
  hour: string,
  title: string,
  onDiet: boolean,
}
*/

const DayMeals = ({ DATA, ...rest }: Props) => {
  const mealsByDate = DATA.reduce((acc: Record<string, DataProps[]>, meal) => {
    if (!acc[meal.date]) {
      acc[meal.date] = [];
    }
    acc[meal.date].push(meal);

    return acc;
  }, {});

  return (
    <Container {...rest}>
      {Object.entries(mealsByDate).map(([date, meals]) => (
        <View key={date} style={{ gap: 7 }}>
          <Title>{date}</Title>
          {meals.map((meal) => (
            <MealDetailsTimeCard
              onDiet={meal.onDiet}
              mealName={meal.title}
              timeInfo={meal.hour}
              key={meal.id}
            />
          ))}
        </View>
      ))}
    </Container>
  );
};

export default DayMeals;
