import axios from "axios";

const apikey = process.env.EXPO_PUBLIC_API_KEY;

export const getCatData = async (submittedValue, amount) => {
  const requestCatData = {
    apikey: apikey,
    objectType: "animals",
    objectAction: "publicSearch",
    search: {
      resultStart: 0,
      resultLimit: amount,
      filters: [
        {
          fieldName: "animalStatus",
          operation: "notequals",
          criteria: "adopted",
        },

        {
          fieldName: "animalSpecies",
          operation: "equals",
          criteria: "cat",
        },
        {
          fieldName: "animalLocation",
          operation: "equals",
          criteria: submittedValue,
        },
        {
          fieldName: "animalLocationDistance",
          operation: "radius",
          criteria: "90",
        },
      ],
      fields: [
        "animalID",
        "animalName",
        "animalBreed",
        "animalPictures",
        "animalLocation",
        "animalPrimaryBreed",
        "animalGeneralAge",
      ],
    },
  };

  const response = await axios.post(
    "https://api.rescuegroups.org/http/v2.json",
    requestCatData
  );

  return response.data;
};

export const getDogData = async (submittedValue, amount) => {
  const requestCatData = {
    apikey: apikey,
    objectType: "animals",
    objectAction: "publicSearch",
    search: {
      resultStart: 0,
      resultLimit: amount,
      filters: [
        {
          fieldName: "animalStatus",
          operation: "notequals",
          criteria: "adopted",
        },
        {
          fieldName: "animalSpecies",
          operation: "equals",
          criteria: "dog",
        },
        {
          fieldName: "animalLocation",
          operation: "equals",
          criteria: submittedValue,
        },
        {
          fieldName: "animalLocationDistance",
          operation: "radius",
          criteria: "90",
        },
      ],
      fields: [
        "animalID",
        "animalName",
        "animalBreed",
        "animalPictures",
        "animalLocation",
        "animalPrimaryBreed",
        "animalGeneralAge",
      ],
    },
  };

  const response = await axios.post(
    "https://api.rescuegroups.org/http/v2.json",
    requestCatData
  );

  return response.data;
};
