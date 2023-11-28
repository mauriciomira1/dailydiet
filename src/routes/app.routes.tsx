import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "@screens/Home";
import NewMeal from "@screens/NewMeal";
import MealDetails from "@screens/MealDetails";
import DietSuccess from "@screens/DietSuccess";
import DietFail from "@screens/DietFail";
import AllStatistics from "@screens/AllStatistics";

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="new" component={NewMeal} />
      <Screen name="mealDetails" component={MealDetails} />
      <Screen name="dietSuccess" component={DietSuccess} />
      <Screen name="dietFail" component={DietFail} />
      <Screen name="statistics" component={AllStatistics} />
    </Navigator>
  );
};
