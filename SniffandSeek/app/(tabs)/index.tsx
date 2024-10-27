import { Text, View, StyleSheet, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import { getCatData, getDogData } from "@/api/homepageApi";
import HomePageList from "@/components/HomePageList";
import LocationInput from "@/components/LocationInput";

export default function Index() {
  const [catData, setCatData] = useState(null);
  const [dogData, setDogData] = useState(null);
  const [location, setLocation] = useState("");
  const [submittedValue, setSubmittedValue] = useState("47408");

  useEffect(() => {
    const fetchData = async () => {
      const catResponse = await getCatData(submittedValue);
      const dogResponse = await getDogData(submittedValue);
      setCatData(catResponse);
      setDogData(dogResponse);
      //   console.log(catData.data[Object.keys(catData.data)[0]]);
    };
    fetchData();
  }, [submittedValue]);

  //loading screen
  if (!catData || !dogData) {
    return <Text>Loading...</Text>;
  }

  const catList = Object.values(catData.data);
  const dogList = Object.values(dogData.data);

  console.log(catList);
  console.log(dogList);

  return (
    <ScrollView>
      <View style={styles.inputContainer}>
        <LocationInput
          location={location}
          setLocation={setLocation}
          submittedValue={submittedValue}
          setSubmittedValue={setSubmittedValue}
        />
      </View>

      <Text style={styles.headingStyle}>Adoptable cats and kittens</Text>
      <HomePageList list={catList} species={"cats"} />
      <Text style={styles.headingStyle}>Adoptable dogs and puppies</Text>
      <HomePageList list={dogList} species={"dogs"} />

      <Text style={styles.headingStyle}>Resources</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    marginTop: 140,
  },
  headingStyle: {
    marginTop: 16,
    marginLeft: 20,
    fontSize: 24,
  },
  scrollView: {
    backgroundColor: "#f7f7f7",
  },
});
