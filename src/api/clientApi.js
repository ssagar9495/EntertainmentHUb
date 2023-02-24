import axios from "axios";

export const listApi = async (endpoint) => {
  return await axios.get(endpoint);
};
