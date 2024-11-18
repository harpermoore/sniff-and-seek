import axios from "axios";

const apiKey = process.env.EXPO_PUBLIC_API_KEY_UNSPLASH;

export const getEventImg = async (query) => {
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: query,
        page: 1,
        per_page: 5,
        order_by: "relevant",
        collections: "123,456",
        content_filter: "high",
        orientation: "landscape",
      },
      headers: {
        Authorization: `Client-ID ${apiKey}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
