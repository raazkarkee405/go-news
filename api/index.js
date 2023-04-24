import axios from "axios";
import { API_KEY } from '@env'
export const getTopStories = async () => {
  try {
    const data = await axios.get(
      `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`
    );
    return data;
  } catch (error) {
    return null;
  }
};
