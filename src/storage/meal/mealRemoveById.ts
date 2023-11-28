import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealsGetAll } from "./mealsGetAll";
import { MEAL_COLLECTION } from "@storage/storageConfig";

const mealRemoveById = async (id: number) => {
  try {
    const storage = await mealsGetAll();
    const newStorage = storage?.filter((meal) => meal.id !== id);
    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(newStorage));
  } catch (error) {
    console.log("Erro no mealRemoveById", error);
  }
};

export default mealRemoveById;
