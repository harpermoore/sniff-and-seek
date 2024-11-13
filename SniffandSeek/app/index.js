import { Text, View, StyleSheet, ScrollView, Dimensions } from "react-native";
import { useState, useEffect, useRef } from "react";
import { getCatData, getDogData } from "@/api/homepageApi";
import { getResource } from "@/api/resourceApi";
// import { getEventImg } from "@/api/eventImgApi";
import HomePageList from "@/components/HomePageList";
import LocationInput from "@/components/LocationInput";
import EventSection from "@/components/EventSection";

const width = Dimensions.get("screen");

export default function Home() {
  const [catData, setCatData] = useState(null);
  const [dogData, setDogData] = useState(null);
  const [resourceData, setResourceData] = useState(null);
  // const [eventImgData, setEventImgData] = useState(null);
  const [location, setLocation] = useState("");
  const [submittedValue, setSubmittedValue] = useState("47408");

  useEffect(() => {
    const fetchData = async () => {
      const catResponse = await getCatData(submittedValue);
      const dogResponse = await getDogData(submittedValue);
      const resourceResponse = await getResource();
      // const eventImgResponse = await getEventImg("dog");

      setCatData(catResponse);
      setDogData(dogResponse);
      setResourceData(resourceResponse);
      // setEventImgData(eventImgResponse.result);
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
  // const eventImgList = Object.values(eventImgData);

  // const ImgObj = eventImgList[2]; //array

  const eventSectionList = eventList.map((item, index) => {
    return {
      name: item.eventName,
      startDate: item.eventStart,
      endDate: item.eventEnd,
      eventUrl: item.eventUrl,
      description: item.eventDescription,

      // imgObj: ImgObj[index],
    };
  });

  return (
    <ScrollView>
      <View style={styles.inputContainer}>
        <Text style={styles.heading}>Start from entering your location!</Text>
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
      <Text style={styles.headingStyle}>Events</Text>
      <EventSection list={eventSectionList} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: width,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#B50000",
    paddingVertical: 24,
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
    color: "#fff",
    marginBottom: 12,
  },
});
