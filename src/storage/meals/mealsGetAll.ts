import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealsProps } from "@screens/Home";
import { MEALS_COLLECTION } from "@storage/storageConfig";

export async function mealsGetAll() {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION);

    const meals: MealsProps[] = storage ? JSON.parse(storage) : [];

    return meals;
  } catch (error) {
    throw error
  }
}