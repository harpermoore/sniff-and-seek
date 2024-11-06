import axios from "axios";

const apikey = process.env.EXPO_PUBLIC_API_KEY;

export const getResource = async () => {
  const requestArticleData = {
    apikey: apikey,
    objectType: "events",
    objectAction: "publicSearch",
    search: {
      resultStart: 0,
      resultLimit: 5,
      filters: [
        {
          fieldName: "eventStart",
          operation: "greaterthan",
          criteria: "rg:today",
        },
      ],

      fields: [
        "eventName",
        "eventDescription",
        "eventStart",
        "eventEnd",
        "eventUrl",
      ],
    },
  };
  const response = await axios.post(
    "https://api.rescuegroups.org/http/v2.json",
    requestArticleData
  );

  return response.data;
};
