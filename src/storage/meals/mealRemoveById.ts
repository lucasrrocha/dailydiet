import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "@storage/storageConfig";
import { mealsGetAll } from "./mealsGetAll";

export async function mealRemoveById(id: number) {
  try {
    const storage = await mealsGetAll();

    const meals = storage.filter(meal => meal.id !== id);

    AsyncStorage.setItem(`${MEALS_COLLECTION}`, JSON.stringify(meals))
  } catch (error) {
    throw error
  }

}