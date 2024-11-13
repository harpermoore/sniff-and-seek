import { Text, StyleSheet, ScrollView } from "react-native";
import { getAnimalData } from "@/api/animalProfileApi";
import { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import Slider from "@/components/Slider";
import InfoSection from "@/components/InfoSection";
import AnimalProvider from "@/context/AnimalProvider";

const placeholdercat = require("../assets/images/placeholdercat.png");
const placeholderdog = require("../assets/images/placeholderdog.png");

export default function AnimalProfile() {
  const animal = useLocalSearchParams();
  const [animalData, setAnimalData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const animalResponse = await getAnimalData(animal.animalID);
      setAnimalData(animalResponse);
    };
    fetchData();
  }, []);

  if (!animalData) {
    return <Text>Loading...</Text>;
  }

  const dataList = Object.values(animalData.data.data)[0];
  const pictures = Object.values(dataList.animalPictures)
    ? Object.values(dataList.animalPictures)
    : placeholdercat;

  return (
    <ScrollView style={styles.container}>
      <Slider name={dataList.animalName} pictures={pictures} />

      <AnimalProvider animalData={dataList}>
        <InfoSection />
      </AnimalProvider>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
