import { View, StyleSheet, Text, Image } from "react-native";

export default function Card({ animalName, animalID, imgUri }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imgStyle}
        source={{ uri: imgUri }}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text>{animalName}</Text>
        <Text>AnimalID: {animalID}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: "center",
    width: 120,
    height: 220,
    backgroundColor: "transparent",
    borderRadius: 10,
    borderColor: "#e6e6e6",
    borderWidth: 0.5,
    overflow: "hidden",
  },
  imgStyle: {
    width: "100%",
    height: 160,
    margin: 0,
    padding: 0,
  },
  textContainer: {
    alignItems: "center",
    marginTop: 10,
  },
});
