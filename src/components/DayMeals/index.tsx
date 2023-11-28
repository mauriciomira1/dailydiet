import React from "react";
import { Container, Title } from "./styles";
import MealDetailsTimeCard from "./MealDetailsTimeCard";
import { View, ViewProps } from "react-native";
import { DataProps } from "@screens/Home";
import { MealProps } from "@storage/meal/mealCreate";
import { useNavigation } from "@react-navigation/native";

type Props = ViewProps & {
  DATA: DataProps[];
};

/* 
meal: = {
  id: number,
  date: string, // Formato dd/MM/yy
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

  // Transformando data para apresentar itens em ordem cronológica
  const dateToTimestamp = (date: string): number => {
    const [day, month, year] = date.split("/");
    return new Date(+`20${year}`, +month - 1, +day).getTime();
  };

  const sortedEntries = Object.entries(mealsByDate).sort(
    ([dateA], [dateB]) => dateToTimestamp(dateB) - dateToTimestamp(dateA)
  );

  const navigation = useNavigation();

  const handleGotoMealDetailsPage = (id: number) => {
    navigation.navigate("mealDetails", { id });
  };

  return (
    <Container {...rest}>
      {sortedEntries.map(([date, meals]) => (
        <View key={date} style={{ gap: 7 }}>
          <Title>{date}</Title>
          {meals.map((meal) => (
            <MealDetailsTimeCard
              onDiet={meal.onDiet}
              mealName={meal.title}
              timeInfo={meal.hour}
              key={meal.id}
              handleOnPress={() => handleGotoMealDetailsPage(meal.id!)}
            />
          ))}
        </View>
      ))}
    </Container>
  );
};

export default DayMeals;
