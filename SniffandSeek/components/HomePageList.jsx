import { ScrollView, View, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { getCatData } from "../api/homepageApi";
import Card from "@/components/Card";

export default function HomePageList() {
  const [catData, setCatData] = useState(null);
  const [dogData, setDogData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getCatData();
      setCatData(response);
      //   console.log(catData.data[Object.keys(catData.data)[0]]);
    };
    fetchData();
  }, []);

  if (!catData) {
    // Wait until data is fetched
    return <Text>Loading...</Text>;
  }

  const catKeys = Object.keys(catData.data);

  const catList = Object.values(catData.data);
  console.log(catList);

  return (
    <ScrollView style={styles.listStyle}>
      <View style={styles.cardContainer}>
        {catList.map((cat) => (
          <Card
            key={cat.animalID}
            animalID={cat.animalID}
            animalName={cat.animalName}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  listStyle: {
    Horizontal: true,
  },
  cardContainer: {
    flexDirection: "row",
    gap: 12,
  },
});
