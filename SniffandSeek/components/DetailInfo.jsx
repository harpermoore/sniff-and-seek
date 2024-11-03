import { Text, View } from "react-native";
import InfoBlock from "./InfoBlock.jsx";
import { useAnimalContext } from "../context/AnimalProvider.jsx";

export default function DetailInfo() {
  const { animalName, animalLocation, animalOrgID } = useAnimalContext();
  console.log(animalName + animalLocation + animalOrgID);

  return (
    <View>
      <InfoBlock label={"Location"} content={"hi"} />
      <InfoBlock />
      <InfoBlock />
    </View>
  );
}
