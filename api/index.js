import axios from "axios";
import { API_KEY } from "@env";
export const getNews = async (type) => {
  try {
    const data = await axios.get(
      `https://api.nytimes.com/svc/topstories/v2/${type}.json?api-key=${API_KEY}`
    );
    return data.data;
  } catch (error) {
    return null;
  }
};
