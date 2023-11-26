import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

import Home from "@screens/Home";
import NewMeal from "@screens/NewMeal";
import MealDetails from "@screens/MealDetails";
import DietSuccess from "@screens/DietSuccess";
import DietFail from "@screens/DietFail";

export const AppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="new" component={NewMeal} />
      <Screen name="meal-details" component={MealDetails} />
      <Screen name="diet-success" component={DietSuccess} />
      <Screen name="diet-fail" component={DietFail} />
    </Navigator>
  );
};
