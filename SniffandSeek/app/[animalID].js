import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { getAnimalData } from "../api/animalProfileApi";
import { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import Slider from "@/components/Slider";
import InfoSection from "@/components/InfoSection";

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

  const dataList = Object.values(animalData.data.data)[0]; // 獲取 181 對象
  console.log(dataList);
  console.log(dataList.animalPictures[0].large.url);
  const pictures = Object.values(dataList.animalPictures);
  console.log(pictures);
  console.log(animal.animalID);

  return (
    <ScrollView style={styles.container}>
      <Slider name={dataList.animalName} pictures={pictures} />
      <InfoSection name={dataList.animalName} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
