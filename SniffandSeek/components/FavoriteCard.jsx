import { View, StyleSheet, Image, Text, Pressable } from "react-native";

const placeholder = require("../assets/images/placeholdercat.png");

export default function FavoriteCard() {
  return (
    <View style={styles.container}>
      {/* Left column */}
      <Image style={styles.img} source={placeholder} />

      {/* Right column */}
      <View style={styles.rightContainer}>
        <View>
          <Text>Name:</Text>
          <Text>Animal ID:</Text>
          <Text>Status:</Text>
        </View>
        <Pressable style={styles.btn}>
          <Text style={styles.btnText}>Check details</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 18,
    marginTop: 140,
    width: 380,
    height: 220,
    backgroundColor: "#ffff",
    borderWidth: 1,
    borderRadius: 16,
    borderCurve: "continuous",
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
});
