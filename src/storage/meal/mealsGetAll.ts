import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";
import { MealProps } from "./mealCreate";

export const mealsGetAll = async () => {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

    const meals: MealProps[] = storage ? JSON.parse(storage) : [];

    return meals;
  } catch (error) {
    console.log(error);
  }
};
