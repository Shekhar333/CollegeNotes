import { useContext } from "react";
import { FoodContext } from "./food-context";

export const useFood = () => {
  const context = useContext(FoodContext);
  return context;
};
