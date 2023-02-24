import axios from "axios";

export const listApi = async (endpoint) => {
  return await axios.get(endpoint);
};

export const apiKey = "?api_key=a5e491eb8beca69a15930df3567b25c0";
