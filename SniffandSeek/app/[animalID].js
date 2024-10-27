import { View, Text, Image, StyleSheet } from "react-native";
import { getAnimalData } from "../api/animalProfileApi";
import { useEffect, useState } from "react";

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
  console.log(dataList.animalName);
  console.log(dataList.animalPictures[0].small.url);

  return (
    <View>
      <Image
        source={{ uri: dataList.animalPictures[0].small.url }}
        style={styles.imgStyle}
      />
      <Text>{dataList.animalName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  imgStyle: {
    width: 200,
    height: 200,
  },
});
