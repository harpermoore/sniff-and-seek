import { createContext } from "react";

export const AnimalContext = createContext();

export default function AnimalProvider({ children, animalData }) {
  return (
    <AnimalContext.Provider value={animalData}>
      {children}
    </AnimalContext.Provider>
  );
}
