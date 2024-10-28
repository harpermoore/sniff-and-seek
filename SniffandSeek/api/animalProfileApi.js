import axios from "axios";

const apikey = process.env.EXPO_PUBLIC_API_KEY;

export const getAnimalData = async () => {
  const requestAnimalData = {
    apikey: apikey,
    objectType: "animals",
    objectAction: "publicSearch",
    search: {
      resultStart: 0,
      resultLimit: 1,
      filters: [
        {
          fieldName: "animalID",
          operation: "equals",
          criteria: "25854",
        },
      ],
      fields: [
        "animalID",
        "animalName",
        "animalBreed",
        "animalPictures",
        "animalLocation",
        "animalPrimaryBreed",
      ],
    },
  };

  const response = await axios.post(
    "https://api.rescuegroups.org/http/v2.json",
    requestAnimalData
  );

  return response;
};
