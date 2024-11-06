import { View, StyleSheet } from "react-native";

export default function FavoriteCard() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    marginTop: 140,
    width: 300,
    height: 120,
    backgroundColor: "#ffff",
    borderWidth: 1,
    borderRadius: 16,
    borderCurve: "continuous",
  },
});
