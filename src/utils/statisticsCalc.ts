import { mealsGetAll } from "@storage/meal/mealsGetAll";
import { useState } from "react";
import { Float } from "react-native/Libraries/Types/CodegenTypes";

export const generalStatistic = async () => {
  /* 
1. Listar todas as refeições e accumular 1 naquelas que forem onDiet=true (QuantityOfMealsOnDiet)
2. Contabilizar quantas refeições existem e dividir (MealsQuantity)
3. return: QuantityOfMealsOnDiet/MealsQuantity
*/

  try {
    const storage = await mealsGetAll();
    const mealsQuantity = storage?.length || 0;

    const quantityOfMealsOnDiet =
      storage?.filter((meal) => meal.onDiet === true).length || 0;

    if (mealsQuantity === 0 || quantityOfMealsOnDiet === 0) {
      const statisticValue = 0;
      return statisticValue;
    }

    const statisticValue = quantityOfMealsOnDiet / mealsQuantity;
    return statisticValue;
  } catch (error) {
    console.log("Erro em GeneralStatistic --------->", error);
  }
};
