import React from "react";
import { Container, Title } from "./styles";
import MealDetailsTimeCard from "./MealDetailsTimeCard";
import { ViewProps } from "react-native";

type Props = ViewProps;

const DayMeals = ({ ...rest }: Props) => {
  return (
    <Container {...rest}>
      <Title>12.08.22</Title>
      <MealDetailsTimeCard mealName="Pipoca doce" onDiet timeInfo="22:00" />
      <MealDetailsTimeCard mealName="Pipoca doce" onDiet timeInfo="22:00" />
      <MealDetailsTimeCard mealName="Pipoca doce" onDiet timeInfo="22:00" />
      <MealDetailsTimeCard mealName="Pipoca doce" onDiet timeInfo="22:00" />
      <MealDetailsTimeCard mealName="Pipoca doce" onDiet timeInfo="22:00" />
      <MealDetailsTimeCard mealName="Pipoca doce" onDiet timeInfo="22:00" />
      <MealDetailsTimeCard mealName="Pipoca doce" onDiet timeInfo="22:00" />
    </Container>
  );
};

export default DayMeals;
