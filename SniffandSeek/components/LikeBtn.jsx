import { Pressable, StyleSheet, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useAuth } from "../context/AuthContext";

export default function LikeBtn({ animalID }) {
  const { likedList, setLikedList } = useAuth();

  const handleLikded = () => {
    setLikedList((prevList) => [...prevList, animalID]);
    console.log(likedList);
  };

  return (
    <Pressable onPress={handleLikded}>
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
