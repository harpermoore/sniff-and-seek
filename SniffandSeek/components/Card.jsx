import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { Link } from "expo-router";

export default function Card({
  animalName,
  animalID,
  animalBreed,
  imgUri,
  haveImg,
}) {
  return (
    <View style={styles.container}>
      {haveImg ? (
        <Image
          style={styles.imgStyle}
          source={{ uri: imgUri }}
          resizeMode="cover"
        />
      ) : (
        <Text>I DON'T HAVE PIC</Text>
      )}

      <View style={styles.textContainer}>
        <Text>{animalName}</Text>
        <Text>AnimalID: {animalID}</Text>
      </View>

      <Link href={`/${animalID}`} asChild>
        <Pressable style={styles.buttonStyle}>
          <Text style={styles.textStyle}>Check {animalName}</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: "center",
    width: 140,
    height: 270,
    backgroundColor: "#fff",
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
  buttonStyle: {
    backgroundColor: "#333",
    marginTop: 10,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 20,
  },
  textStyle: {
    color: "#fff",
  },
});
