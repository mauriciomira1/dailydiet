import React from "react";
import { Container, Title } from "./styles";
import MealDetailsTimeCard from "./MealDetailsTimeCard";
import { View, ViewProps } from "react-native";
import { DataProps } from "@screens/Home";

type Props = ViewProps & {
  DATA: DataProps[];
};

const DayMeals = ({ DATA, ...rest }: Props) => {
  return (
    <Container {...rest}>
      {DATA.map((data) => (
        <View key={data.title} style={{ gap: 7 }}>
          <Title>{data.title}</Title>
          {data.meals.map((meal) => (
            <MealDetailsTimeCard
              onDiet={meal.onDiet}
              mealName={meal.mealName}
              timeInfo={meal.timeInfo}
            />
          ))}
        </View>
      ))}
    </Container>
  );
};

export default DayMeals;
