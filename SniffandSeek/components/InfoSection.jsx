import { ScrollView, Text, StyleSheet, View } from "react-native";
import { useContext } from "react";
import LikeBtn from "../components/LikeBtn";
import BasicInfo from "./BasicInfo";
import { AnimalContext } from "../context/AnimalProvider";

export default function InfoSection() {
  const { animalName: name, animalID } = useContext(AnimalContext);

  return (
    <ScrollView>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>{name}</Text>
        <LikeBtn animalID={animalID} />
      </View>

      <BasicInfo />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 32,
  },

  heading: {
    fontSize: 48,
    fontWeight: "600",
  },
});
