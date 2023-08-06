import axios from 'axios';

export const BASE_URL = `https://restcountries.com/v3.1`;
export const fetchDatFromApi = async (url) => {
  try {
    const { data } = await axios.get(BASE_URL + url);
    return data;
  } catch (error) {
    return error;
  }
};
