import { View, StyleSheet, Dimensions } from "react-native";
import InfoBlock from "./InfoBlock";
import { useContext } from "react";
import { AnimalContext } from "../context/AnimalProvider";
import RenderHtml from "react-native-render-html";

const { width } = Dimensions.get("screen");

export default function BasicInfo() {
  const {
    animalName,
    animalBreed,
    animalColor,
    animalDescription,
    animalGeneralAge,
  } = useContext(AnimalContext);

  return (
    <View style={styles.container}>
      <InfoBlock label={"Breed"} content={animalBreed} />

      <InfoBlock label={"Color"} content={animalColor} />

      <InfoBlock label={"General age"} content={animalGeneralAge} />

      <InfoBlock
        label={`More about ${animalName}`}
        content={
          animalDescription.length > 0 ? (
            <RenderHtml
              contentWidth={width}
              source={{ html: animalDescription }}
            />
          ) : (
            "They didn't say anything about me :( Adpot me and get to know me more!"
          )
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
