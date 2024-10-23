import axios from "axios";

const apikey = process.env.EXPO_PUBLIC_API_KEY;

export const getCatData = async (location) => {
  const requestCatData = {
    apikey: apikey,
    objectType: "animals",
    objectAction: "publicSearch",
    search: {
      resultStart: 0,
      resultLimit: 20,
      filters: [
        {
          fieldName: "animalSpecies",
          operation: "equals",
          criteria: "cat",
        },
        {
          fieldName: "orgLocationDistance",
          operation: "radius",
          criteria: "90",
        },

        {
          fieldName: "animalLocation",
          operation: "equals",
          criteria: location,
        },
      ],
      fields: [
        "animalID",
        "animalName",
        "animalBreed",
        "animalPictures",
        "animalLocation",
      ],
    },
  };

  const response = await axios.post(
    "https://api.rescuegroups.org/http/v2.json",
    requestCatData
  );

  return response.data;
};

export const getDogData = async (location) => {
  const requestCatData = {
    apikey: apikey,
    objectType: "animals",
    objectAction: "publicSearch",
    search: {
      resultStart: 0,
      resultLimit: 20,
      filters: [
        {
          fieldName: "animalSpecies",
          operation: "equals",
          criteria: "dog",
        },
        {
          fieldName: "animalLocation",
          operation: "equals",
          criteria: location,
        },
      ],
      fields: [
        "animalID",
        "animalName",
        "animalBreed",
        "animalPictures",
        "animalLocation",
      ],
    },
  };

  const response = await axios.post(
    "https://api.rescuegroups.org/http/v2.json",
    requestCatData
  );

  return response.data;
};
