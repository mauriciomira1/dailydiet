import { DataProps } from "@screens/Home";
import { MealProps } from "@storage/meal/mealCreate";
import { useState } from "react";

export const sortMealByDateAndHour = (meals: MealProps[]) => {
  const mealsByDate = meals.reduce((acc: Record<string, DataProps[]>, meal) => {
    if (!acc[meal.date]) {
      acc[meal.date] = [];
    }
    acc[meal.date].push(meal);

    return acc;
  }, {});

  const dateToTimestamp = (date: string): number => {
    const [day, month, year] = date.split("/");
    return new Date(+`20${year}`, +month - 1, +day).getTime();
  };

  const sortedEntries = Object.entries(mealsByDate).sort(
    ([dateA], [dateB]) => dateToTimestamp(dateB) - dateToTimestamp(dateA)
  );

  let bestSequence: MealProps[] = [];

  sortedEntries.map(([date, meals]) => {
    const sortedMeals = meals.sort((a, b) => {
      return b.hour.localeCompare(a.hour);
    });

    let currentSequence: MealProps[] = [];

    sortedMeals.forEach((meal) => {
      if (meal.onDiet) {
        currentSequence.push(meal);
        if (currentSequence.length > bestSequence.length) {
          bestSequence = [...currentSequence];
        }
      } else {
        currentSequence = [];
      }
    });
  });

  return bestSequence;
};
