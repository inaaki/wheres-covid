/* eslint-disable no-console */
import axios from 'axios';

const baseUrl = `https://${import.meta.env.VITE_API_HOST}/`;

const defaultConfig = {
  headers: {
    'x-rapidapi-host': import.meta.env.VITE_API_HOST,
    'x-rapidapi-key': import.meta.env.VITE_API_KEY,
  },
};

export const getCountries = async () => {
  const url = `${baseUrl}/countries`;
  let result = '';
  try {
    const response = await axios.get(url, defaultConfig);
    result = response.data.response;
  } catch (e) {
    console.dir(e.message);
  }
  return result;
};

export const getCovidData = async (country) => {
  const url = `${baseUrl}/statistics`;
  const parameters = {
    params: {
      country: country === 'global' ? null : country,
    },
  };
  let result = '';
  try {
    const response = await axios.get(url, { ...defaultConfig, ...parameters });
    result = response.data.response;
  } catch (e) {
    //
  }
  return result;
};
