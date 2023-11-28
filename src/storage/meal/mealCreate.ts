import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";

import { mealsGetAll } from "./mealsGetAll";
import { AppError } from "@utils/AppError";
import { format, parse } from "date-fns";

export type MealProps = {
  id?: number;
  date: string; // Formato dd/MM/yy
  hour: string; // Formato 00:00
  title: string;
  description: string;
  onDiet: boolean;
};

export const mealCreate = async (newMeal: MealProps) => {
  try {
    let storageMeals = (await mealsGetAll()) || [];

    if (!Array.isArray(storageMeals)) {
      storageMeals = [];
    }

    if (newMeal.id !== undefined) {
      const mealsAlreadyExists = storageMeals?.some((meal) => {
        return (
          meal.title === newMeal.title &&
          meal.hour === newMeal.hour &&
          meal.date === newMeal.date
        );
      });

      if (mealsAlreadyExists) {
        throw new AppError(
          "Já existe uma refeição com esse título nesse mesmo horário nessa data."
        );
      }
    }

    // Criando id aleatório (para simular o DB)
    const id = Math.floor(Math.random() * 1000000);
    newMeal.id = id;

    // Formatando data
    const parseDate = parse(newMeal.date, "dd/MM/yy", new Date());
    const formattedDate = format(parseDate, "dd/MM/yy");
    newMeal.date = formattedDate;

    const newStorageMeals: MealProps[] = [...storageMeals, newMeal];

    await AsyncStorage.setItem(
      MEAL_COLLECTION,
      JSON.stringify(newStorageMeals)
    );
  } catch (error) {
    console.log("Erro em mealCreate --------->", error);
  }
};
