import AsyncStorage from "@react-native-async-storage/async-storage";

import { MealsProps } from "@screens/Home";
import { MEALS_COLLECTION } from "@storage/storageConfig";
import { mealsGetAll } from "./mealsGetAll";

export async function mealCreate(newMeal: MealsProps) {
  try {
    const storedMeals = await mealsGetAll();

    const storage = JSON.stringify([...storedMeals, newMeal])
    await AsyncStorage.setItem(MEALS_COLLECTION, storage);

  } catch (error) {
    throw error;
  }
}