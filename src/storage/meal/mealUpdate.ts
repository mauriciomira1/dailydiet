import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealsGetAll } from "./mealsGetAll";
import { MealProps } from "./mealCreate";
import { AppError } from "@utils/AppError";
import { MEAL_COLLECTION } from "@storage/storageConfig";

export const mealUpdate = async (newMeal: MealProps) => {
  try {
    const storage = await mealsGetAll();

    if (storage === undefined) {
      throw new AppError("Não há nenhuma refeição cadastrada.");
    }
    const mealIndex = storage?.findIndex((item) => item.id === newMeal.id);

    if (mealIndex === -1) {
      throw new AppError("Refeição não encontrada.");
    }

    const updatedMeal = { ...storage[mealIndex], ...newMeal };
    storage[mealIndex] = updatedMeal;

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(storage));
  } catch (error) {
    console.log("Erro no mealUpdate ------------>", error);
  }
};
