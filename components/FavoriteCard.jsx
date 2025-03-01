import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link } from "expo-router";

const placeholder = require("../assets/images/placeholdercat.png");

export default function FavoriteCard({
  animalName,
  animalID,
  animalStatus,
  imgUri,
  likedList,
  setLikedList,
}) {
  const handleDelete = (ID) => {
    const newLikedList = likedList.filter((animal) => animal !== ID);
    setLikedList(newLikedList);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.delete} onPress={() => handleDelete(animalID)}>
        <View>
          <AntDesign name="delete" size={24} color="#8888" />
        </View>
      </Pressable>
      {/* Left column */}
      <Image style={styles.img} source={{ uri: imgUri }} />

      {/* Right column */}
      <View style={styles.rightContainer}>
        {/* info and delete         */}
        <View style={styles.info}>
          <View>
            <Text style={{ fontSize: 18 }}>{animalName}</Text>
            <Text>Animal ID: {animalID}</Text>
            <Text>Status: {animalStatus}</Text>
          </View>
        </View>

        {/* Check detail button */}
        <Link href={`/${animalID}`} asChild>
          <Pressable style={styles.btn}>
            <Text style={styles.btnText}>Check details</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 6,
    marginBottom: 18,
    width: 390,
    height: 220,
    backgroundColor: "#ffff",
    borderRadius: 16,
    borderCurve: "continuous",
    shadowColor: "black",
    position: "relative",
  },
  img: {
    width: 160,
    height: "100%",
    borderRadius: 16,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    borderCurve: "continuous",
  },
  rightContainer: {
    justifyContent: "space-between",
    padding: 16,
  },
  btn: {
    backgroundColor: "#B50000",
    paddingHorizontal: 28,
    paddingVertical: 10,
    borderRadius: 16,
    borderCurve: "continuous",
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  delete: {
    position: "absolute",
    right: 16,
    top: 20,
  },
});
