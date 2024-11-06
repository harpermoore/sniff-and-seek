import { View, StyleSheet } from "react-native";
import FavoriteCard from "../../components/FavoriteCard";

export default function favorite() {
  return (
    <View styles={styles.container}>
      <FavoriteCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
});
