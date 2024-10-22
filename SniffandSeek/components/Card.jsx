import { View, StyleSheet, Text, Image } from "react-native";

export default function Card({ animalName, animalID, imgUri }) {
  return (
    <View style={styles.container}>
      <Image style={styles.imgStyle} source={{ uri: imgUri }} />
      <Text>{animalName}</Text>
      <Text>AnimalID: {animalID}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    height: 220,
    backgroundColor: "transparent",
    borderRadius: 10,
    borderColor: "#e6e6e6",
    borderWidth: 0.5,
  },
  imgStyle: {
    width: 110,
    height: 160,
    borderRadius: 10,
  },
});
