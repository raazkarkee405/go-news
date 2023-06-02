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

export const searchNews = async (query) => {
  try {
    const value = encodeURIComponent(`_id:"${query}"`);
    const data = await axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=${value}&api-key=${API_KEY}`
    );
    return data.data;
  } catch (error) {
    return null;
  }
};
