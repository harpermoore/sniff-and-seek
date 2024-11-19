import { FlatList, View, Text, StyleSheet, ScrollView } from "react-native";
import { useState, useEffect } from "react";

import { getDogData } from "../api/homepageApi";
import Card from "@/components/Card";

export default function catSearch() {
  const [dogData, setDogData] = useState(null);

  useEffect(() => {
    const getDog = async () => {
      const dogResponse = await getDogData("46208", 100);

      setDogData(dogResponse);
    };
    getDog();
  }, []);

  if (!dogData) {
    return <Text>Loading...</Text>;
  }

  const dogDataList = Object.values(dogData.data);
  console.log(dogDataList);

  return (
    <>
      <FlatList
        data={dogDataList}
        numColumns={2}
        renderItem={({ item }) => (
          <Card
            animalID={item.animalID}
            haveImg={item.animalPictures[0] ? true : false}
            animalName={item.animalName}
            age={item.animalGeneralAge}
            imgUri={
              item.animalPictures[0] ? item.animalPictures[0].small.url : null
            }
          />
        )}
        keyExtractor={(item) => item.animalID}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.container}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 26, paddingVertical: 16 },
  row: {
    justifyContent: "space-between",
    marginBottom: 20,
  },
});
