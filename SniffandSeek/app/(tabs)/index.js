import { Text, View, StyleSheet, ScrollView, Dimensions } from "react-native";
import { useState, useEffect, useRef } from "react";
import { getCatData, getDogData } from "@/api/homepageApi";
import { getResource } from "@/api/resourceApi";
import HomePageList from "@/components/HomePageList";
import LocationInput from "@/components/LocationInput";
import EventSection from "@/components/EventSection";
import AdoptableNavigation from "@/components/AdoptableNavigation";
import { imgData } from "../../data/eventImg";

const { width } = Dimensions.get("screen");

export default function Home() {
  const [catData, setCatData] = useState(null);
  const [dogData, setDogData] = useState(null);
  const [resourceData, setResourceData] = useState(null);
  const [location, setLocation] = useState("");
  const [submittedValue, setSubmittedValue] = useState("47408");

  useEffect(() => {
    const fetchData = async () => {
      const catResponse = await getCatData(submittedValue, 20);
      const dogResponse = await getDogData(submittedValue, 20);
      const resourceResponse = await getResource();

      setCatData(catResponse);
      setDogData(dogResponse);
      setResourceData(resourceResponse);
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

  const eventSectionList = eventList.map((item, index) => {
    return {
      name: item.eventName,
      startDate: item.eventStart,
      endDate: item.eventEnd,
      eventUrl: item.eventUrl,
      description: item.eventDescription,
      imgUrl: imgData[index],
    };
  });

  return (
    <ScrollView>
      <View style={styles.inputContainer}>
        <Text style={styles.heading}>Enter Your Location</Text>
        <LocationInput
          location={location}
          setLocation={setLocation}
          submittedValue={submittedValue}
          setSubmittedValue={setSubmittedValue}
        />
      </View>

      <AdoptableNavigation />

      <Text style={styles.headingStyle}>Adoptable cats and kittens</Text>
      <HomePageList list={catList} species={"cats"} />
      <Text style={styles.headingStyle}>Adoptable dogs and puppies</Text>
      <HomePageList list={dogList} species={"dogs"} />

      {/* Resource section */}
      <Text style={styles.headingStyle}>Events</Text>
      <EventSection list={eventSectionList} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: width,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B50000",
    paddingTop: 64,
  },
  headingStyle: {
    marginTop: 16,
    marginLeft: 20,
    fontSize: 24,
  },
  scrollView: {
    backgroundColor: "#f7f7f7",
  },
  heading: {
    fontSize: 32,
    color: "#ffff",
    marginBottom: 12,
  },
});
