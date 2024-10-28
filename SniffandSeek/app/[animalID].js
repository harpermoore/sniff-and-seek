import { View, Text, Image, StyleSheet } from "react-native";
import { getAnimalData } from "../api/animalProfileApi";
import { useEffect, useState } from "react";
import Slider from "../components/Slider";

export default function AnimalProfile() {
  const [animalData, setAnimalData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const animalResponse = await getAnimalData();
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

  return (
    <View>
      <Slider name={dataList.animalName} pictures={pictures} />
    </View>
  );
}

const styles = StyleSheet.create({});
