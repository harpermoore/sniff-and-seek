import { FlatList, View, Text, StyleSheet, ScrollView } from "react-native";
import { useState, useEffect } from "react";

import { getCatData } from "../api/homepageApi";
import Card from "@/components/Card";

export default function catSearch() {
  const [catData, setCatData] = useState(null);

  useEffect(() => {
    const getCat = async () => {
      const catResponse = await getCatData("46208", 100);

      setCatData(catResponse);
      console.log(catResponse);
    };
    getCat();
  }, []);

  if (!catData) {
    return <Text>Loading...</Text>;
  }

  const catDataList = Object.values(catData.data);
  console.log(catDataList);

  return (
    <>
      <FlatList
        data={catDataList}
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
