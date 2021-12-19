import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "92df4c195emsh5eef6fff9254bddp1d3982jsn10df397cf7a8",
    },
  });

  return data;
};
