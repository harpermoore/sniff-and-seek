import { Text, View, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { getCatData, getDogData } from "@/api/homepageApi";
import HomePageList from "../../components/HomePageList";

export default function Index() {
  const [catData, setCatData] = useState(null);
  const [dogData, setDogData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const catResponse = await getCatData();
      const dogResponse = await getDogData();
      setCatData(catResponse);
      setDogData(dogResponse);
      //   console.log(catData.data[Object.keys(catData.data)[0]]);
    };
    fetchData();
  }, []);

  //loading screen
  if (!catData || !dogData) {
    return <Text>Loading...</Text>;
  }

  const catList = Object.values(catData.data);
  const dogList = Object.values(dogData.data);

  return (
    <View>
      <Text style={styles.headingStyle}>Adoptable cats and kittens</Text>
      <HomePageList list={catList} species={"cats"} />
      <Text style={styles.headingStyle}>Adoptable dogs and puppies</Text>
      <HomePageList list={dogList} species={"dogs"} />
    </View>
  );
}

const styles = StyleSheet.create({
  headingStyle: {
    marginTop: 16,
    fontSize: 24,
  },
});
