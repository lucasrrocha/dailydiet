
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealsProps } from "@screens/Home";
import { MEALS_COLLECTION } from "@storage/storageConfig";
import { mealsGetAll } from "./mealsGetAll";

type EditMealProps = Omit<MealsProps, 'id'>

export async function mealEdit(id: number, editMeal: EditMealProps) {
  try {
    const storedMeals = await mealsGetAll();

    const mealById = storedMeals.findIndex(meal => meal.id === id)

    if (mealById !== -1) {
      storedMeals[mealById] = { ...storedMeals[mealById], ...editMeal }

      const storage = JSON.stringify([...storedMeals])
      await AsyncStorage.setItem(MEALS_COLLECTION, storage);
    }

  } catch (error) {
    throw error;
  }
}