import { ScrollView, Text, StyleSheet, View } from "react-native";
import { useContext } from "react";
import ProfileTab from "./ProfileTab";
import LikeBtn from "../components/LikeBtn";
import { AnimalContext } from "../context/AnimalProvider";

export default function InfoSection() {
  const { animalName: name } = useContext(AnimalContext);

  return (
    <ScrollView>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>{name}</Text>
        <LikeBtn />
      </View>

      <ProfileTab />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 32,
  },

  heading: {
    fontSize: 48,
    fontWeight: "600",
  },
});
