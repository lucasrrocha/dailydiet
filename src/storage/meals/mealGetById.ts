import { mealsGetAll } from "./mealsGetAll";

export async function mealGetById(id: number) {
  try {
    const storage = await mealsGetAll();

    const mealById = storage.find(meal => meal.id === id);

    return mealById;
  } catch (error) {
    throw error
  }
}