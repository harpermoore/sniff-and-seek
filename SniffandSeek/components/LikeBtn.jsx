import { Pressable, StyleSheet, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useAuth } from "../context/AuthContext";

export default function LikeBtn({ animalID, modalVisable, setModalVisible }) {
  const { likedList, setLikedList } = useAuth();

  const handleLiked = () => {
    setLikedList((prevList) => {
      const updatedList = [...prevList, animalID];
      console.log(updatedList); // Logging the updated list directly
      return updatedList;
    });
    setModalVisible(true);
  };

  return (
    <Pressable onPress={handleLiked}>
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
    width: 64,
    height: 64,
    backgroundColor: "#B50000",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
