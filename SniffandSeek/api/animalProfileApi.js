import axios from "axios";

const apikey = process.env.EXPO_PUBLIC_API_KEY;

export const getAnimalData = async (animalID) => {
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
          criteria: animalID,
        },
      ],
      fields: [
        "animalID",
        "animalName",
        "animalBreed",
        "animalPictures",
        "animalLocation",
        "animalPrimaryBreed",
        "animalDescription",
        "animalColor",
        "animalGeneralAge",
        "animalSizeCurrent",
        "animalSex",
        "animalStatus",
        "animalAdoptionFee",
        "animalAvailableDate",
        "animalOrgID",
      ],
    },
  };

  const response = await axios.post(
    "https://api.rescuegroups.org/http/v2.json",
    requestAnimalData
  );

  return response;
};
