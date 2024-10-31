import { Pressable, StyleSheet, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function LikeBtn() {
  return (
    <Pressable>
      <View style={styles.circle}>
        <MaterialCommunityIcons
          name="cards-heart-outline"
          size={36}
          color="#ffff"
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 50,
    height: 50,
    backgroundColor: "#B50000",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
