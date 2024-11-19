import { ScrollView, View, StyleSheet, Text, Image } from "react-native";
import { useState, useEffect } from "react";
import FavoriteCard from "../../components/FavoriteCard";
import { useAuth } from "../../context/AuthContext";
// import { getAnimalData } from "../api/animalProfileApi";
import { getLikedAnimal } from "../../api/likedListApi";

const paw = require("../../assets/images/emptyPaw.png");

export default function favorite() {
  const { likedList, setLikedList } = useAuth();
  const [likedData, setLikedData] = useState([]);

  console.log(likedList);

  useEffect(() => {
    const fetchMultipleAnimal = async () => {
      const AnimalPromises = likedList.map((animalID) =>
        getLikedAnimal(animalID)
      );
      try {
        const results = await Promise.all(AnimalPromises);
        console.log(results); //result would be an array
        setLikedData(results);
      } catch (error) {
        console.error("Error fetching multiple animals:", error);
        return [];
      }
    };
    fetchMultipleAnimal();
  }, [likedList]);

  const EmptyListComponent = () => {
    return (
      <View style={styles.emptyList}>
        <Text style={styles.emptyListText}>Your Favorite List is empty</Text>
        <Image style={styles.img} source={paw} />
      </View>
    );
  };

  if (likedList.length === 0) return <EmptyListComponent />;
  else
    return (
      <ScrollView style={{ marginTop: 120 }}>
        <View style={styles.container}>
          {likedData.map((animal) => {
            const data = Object.values(animal.data.data); // Assuming you need this for something else
            console.log(data[0].animalPictures[0].large.url);
            return (
              <FavoriteCard
                animalName={data[0].animalName}
                animalID={data[0].animalID}
                animalStatus={data[0].animalStatus}
                imgUri={data[0].animalPictures[0].large.url}
                key={data[0].animalID}
                likedList={likedList}
                setLikedList={setLikedList}
              />
            );
          })}
        </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  emptyList: {
    flex: 1,
    marginTop: 160,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyListText: {
    fontSize: 32,
  },
  img: {
    width: 300,
    height: 300,
  },
});
