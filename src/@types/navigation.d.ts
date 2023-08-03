import { MealsProps } from "@screens/Home";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: {
        data: MealsProps[];
        percent: string;
      };
      newMeal: undefined;
      register: {
        dietStatus: boolean;
      };
      meals: {
        id: number;
      };
      editMeal: {
        id: number;
      }
    }
  }
}