import { View, Text } from "react-native";
import axios from "axios";

const apikey = process.env.EXPO_PUBLIC_API_KEY;

const getData = async () => {
  const requestData = {
    apikey: apikey,
    objectType: "animals",
    objectAction: "publicSearch",
    search: {
      resultStart: 0,
      resultLimit: 3,
      filters: [
        {
          fieldName: "animalSpecies",
          criteria: "dog",
        },
      ],
      fields: ["animalID", "animalName", "animalBreed", "animalPictures"],
    },
  };

  try {
    const response = await axios.post(
      "https://api.rescuegroups.org/http/v2.json",
      requestData
    );
    console.log(response.data);
  } catch (error) {
    console.error(error.message);
  }
};

getData();

export default function TestData() {
  return (
    <View>
      <Text></Text>
    </View>
  );
}
