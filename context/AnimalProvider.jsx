import { createContext, useContext } from "react";

export const AnimalContext = createContext();

export default function AnimalProvider({ children, animalData }) {
  return (
    <AnimalContext.Provider value={animalData}>
      {children}
    </AnimalContext.Provider>
  );
}

export const useAnimalContext = () => {
  return useContext(AnimalContext);
};
