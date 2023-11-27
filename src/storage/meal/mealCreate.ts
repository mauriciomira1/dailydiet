import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";

import { mealsGetAll } from "./mealsGetAll";
import { AppError } from "@utils/AppError";
import { format } from "date-fns";

export type MealProps = {
  id: number;
  date: string; // Formato dd/MM/yyyy
  hour: string;
  title: string;
  onDiet: boolean;
};

export const mealCreate = async (newMeal: MealProps) => {
  try {
    const storageMeals = await mealsGetAll();

    const mealsAlreadyExists = storageMeals?.some((meal) => {
      meal.id;
    });

    if (mealsAlreadyExists) {
      throw new AppError(
        "Já existe uma refeição com esse título nesse mesmo horário."
      );
    }

    // Criando id aleatório (para simular o DB)
    const date = new Date(newMeal.date);
    const id = Math.floor(Math.random() * 1000000);
    newMeal.id = id;

    // Formatando data
    const formattedDate = format(date, "dd/MM/yyyy");
    newMeal.date = formattedDate;

    const newStorageMeals: MealProps[] = [...storageMeals!, newMeal];

    await AsyncStorage.setItem(
      MEAL_COLLECTION,
      JSON.stringify(newStorageMeals)
    );
  } catch (error) {
    console.log(error);
  }
};
