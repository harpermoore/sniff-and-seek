import { Text, View, StyleSheet, ScrollView } from "react-native";
import { useState, useEffect, useRef } from "react";
import { getCatData, getDogData } from "@/api/homepageApi";
import { getResource } from "@/api/resourceApi";
import { getEventImg } from "@/api/eventImgApi";
import HomePageList from "@/components/HomePageList";
import LocationInput from "@/components/LocationInput";
import EventSection from "@/components/EventSection";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase-config";

const app = initializeApp(firebaseConfig);

export default function Index() {
  const [catData, setCatData] = useState(null);
  const [dogData, setDogData] = useState(null);
  const [resourceData, setResourceData] = useState(null);
  const eventImgData = useRef(null);
  const [location, setLocation] = useState("");
  const [submittedValue, setSubmittedValue] = useState("47408");

  useEffect(() => {
    const fetchData = async () => {
      const catResponse = await getCatData(submittedValue);
      const dogResponse = await getDogData(submittedValue);
      const resourceResponse = await getResource();
      const eventImgResponse = await getEventImg("dog");
      setCatData(catResponse);
      setDogData(dogResponse);
      setResourceData(resourceResponse);
      console.log(eventImgResponse);
      eventImgData.current = eventImgResponse;
    };
    fetchData();
  }, [submittedValue]);

  //loading screen
  if (!catData || !dogData || !resourceData) {
    return <Text>Loading...</Text>;
  }

  const catList = Object.values(catData.data);
  const dogList = Object.values(dogData.data);
  const eventList = Object.values(resourceData.data);

  console.log(eventList);
  console.log(eventImgData.current);

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

      {/* Resource section */}
      <Text style={styles.headingStyle}>Resources</Text>
      <EventSection list={eventList} />
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
