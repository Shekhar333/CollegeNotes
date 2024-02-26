import { useState } from "react";
import { FoodContext } from "./food-context";

export const FoodProvider = ({ children }: { children: React.ReactNode }) => {
  const [foodName, setFoodName] = useState<string | null>("banana");
  const setName = (name: string) => {
    setFoodName(name);
  };
  return (
    <FoodContext.Provider value={{ name: foodName, setName }}>
      {children}
    </FoodContext.Provider>
  );
};
