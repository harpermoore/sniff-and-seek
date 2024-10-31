import { View, StyleSheet } from "react-native";
import InfoBlock from "./InfoBlock";
import { useContext } from "react";
import { AnimalContext } from "../context/AnimalProvider";

export default function BasicInfo() {
  const { animalName, animalBreed, animalColor, animalDescription } =
    useContext(AnimalContext);

  return (
    <View style={styles.container}>
      <InfoBlock label={"Breed"} content={animalBreed} />

      <InfoBlock label={"Color"} content={animalColor} />

      <InfoBlock label={"Color"} content={animalName} />

      <InfoBlock
        label={`More about ${animalName}`}
        content={
          animalDescription.length > 0
            ? animalDescription
            : "They didn't say anything about me :( Adpot me and get to know me more!"
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    flexDirection: "column",
    gap: 36,
    padding: 32,
  },
});
