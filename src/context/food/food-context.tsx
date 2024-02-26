import { createContext } from "react";

export type FoodType = {
  name: string | null;
  setName: (name: string) => void;
};

export const FoodContext = createContext({} as FoodType);
