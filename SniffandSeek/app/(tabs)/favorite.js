import { View, StyleSheet, Text } from "react-native";
import { useState, useEffect } from "react";
import FavoriteCard from "../../components/FavoriteCard";
import { useAuth } from "../../context/AuthContext";
// import { getAnimalData } from "../api/animalProfileApi";
import { getLikedAnimal } from "../../api/likedListApi";

export default function favorite() {
  const { likedList, setLikedList } = useAuth();
  const [likedData, setLikedData] = useState([]);

  console.log(likedList);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getLikedAnimal(likedList);
      console.log(response);
      setLikedData(response);
    };
    fetchData();
  }, [likedList]);

  if (likedList.length === 0) return <Text>Your liked list is empty!</Text>;
  else
    return (
      <View style={styles.container}>
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
