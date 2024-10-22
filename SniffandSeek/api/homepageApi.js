import axios from "axios";

const apikey = process.env.EXPO_PUBLIC_API_KEY;

export const getCatData = async () => {
  const requestCatData = {
    apikey: apikey,
    objectType: "animals",
    objectAction: "publicSearch",
    search: {
      resultStart: 0,
      resultLimit: 10,
      filters: [
        {
          fieldName: "animalSpecies",
          operation: "equals",
          criteria: "cat",
        },
      ],
      fields: ["animalID", "animalName", "animalBreed", "animalPictures"],
    },
  };

  const response = await axios.post(
    "https://api.rescuegroups.org/http/v2.json",
    requestCatData
  );

  return response.data;
};

export const getDogData = async () => {
  const requestCatData = {
    apikey: apikey,
    objectType: "animals",
    objectAction: "publicSearch",
    search: {
      resultStart: 0,
      resultLimit: 10,
      filters: [
        {
          fieldName: "animalSpecies",
          operation: "equals",
          criteria: "dog",
        },
      ],
      fields: ["animalID", "animalName", "animalBreed", "animalPictures"],
    },
  };

  const response = await axios.post(
    "https://api.rescuegroups.org/http/v2.json",
    requestCatData
  );

  return response.data;
};
