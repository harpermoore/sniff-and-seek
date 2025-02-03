import "react-native-reanimated";
import "react-native-gesture-handler";
import { Text, View, StyleSheet, ScrollView, Dimensions } from "react-native";
import { useState, useEffect, useRef } from "react";
import { getCatData, getDogData } from "@/api/homepageApi";
import { getResource } from "@/api/resourceApi";
import HomePageList from "@/components/HomePageList";
import LocationInput from "@/components/LocationInput";
import EventSection from "@/components/EventSection";
import AdoptableNavigation from "@/components/AdoptableNavigation";
import { imgData } from "../../data/eventImg";
import SplashScreen from "../../components/SplashScreen";

const { width } = Dimensions.get("screen");

export default function Home() {
  const [catData, setCatData] = useState(null);
  const [dogData, setDogData] = useState(null);
  const [resourceData, setResourceData] = useState(null);
  const [location, setLocation] = useState("");
  const [submittedValue, setSubmittedValue] = useState("47408");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const catResponse = await getCatData(submittedValue, 20);
      const dogResponse = await getDogData(submittedValue, 20);
      const resourceResponse = await getResource();

      setCatData(catResponse); //set CatData
      setDogData(dogResponse); //set DogData
      setResourceData(resourceResponse); //set Event Section Data

      // setTimeout(() => {
      //   setIsLoading(false);
      // }, 2000);
    };
    fetchData();
  }, [submittedValue]); //dependency: every time user submit the new location -> refresh data

  //Turning data to list
  const catList = Object.values(catData?.data || {});
  const dogList = Object.values(dogData?.data || {});
  const eventList = Object.values(resourceData?.data || {});

  //event section data handling
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

  if (isLoading) {
    return <SplashScreen />;
  }

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
      <HomePageList list={catList} species={"cats"} isLoading={isLoading} />
      <Text style={styles.headingStyle}>Adoptable dogs and puppies</Text>
      <HomePageList list={dogList} species={"dogs"} isLoading={isLoading} />

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
