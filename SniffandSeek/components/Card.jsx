import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { Link } from "expo-router";

const placeholderdog = "../assets/images/placeholderdog.png";
const placeholdercat = "../assets/images/placeholdercat.png";

export default function Card({
  animalName,
  animalID,
  animalBreed,
  imgUri,
  haveImg,
  species,
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
        <Image
          style={styles.imgStyle}
          source={{ uri: species === "dogs" ? placeholderdog : placeholdercat }}
          resizeMode="cover"
        />
      )}

      {/* Animal name */}
      <View style={styles.textContainer}>
        <Text>{animalName}</Text>
      </View>

      {/* Check details button */}
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
    width: 160,
    height: "auto",
    backgroundColor: "#fff",
    borderRadius: 10,
    borderColor: "#e6e6e6",
    borderWidth: 0.5,
    overflow: "hidden",
  },
  imgStyle: {
    width: "100%",
    height: 200,
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
    overflow: "hidden",
  },
  textStyle: {
    color: "#fff",
    overflow: "hidden",
  },
});
