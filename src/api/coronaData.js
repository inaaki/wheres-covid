/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
import axios from 'axios';
import dayjs from 'dayjs';
import { calculateToChart } from '../utils/calculate';

const baseUrl = `https://${import.meta.env.VITE_API_HOST}/`;

const defaultConfig = {
  headers: {
    'x-rapidapi-host': import.meta.env.VITE_API_HOST,
    'x-rapidapi-key': import.meta.env.VITE_API_KEY,
  },
};

export const getCountries = async () => {
  const url = `${baseUrl}countries`;
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
  const url = `${baseUrl}statistics`;
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

export const getPerDaysData = async (days, country) => {
  // creating chart based data structure
  const chartData = [];

  const now = dayjs();
  for (let i = 0; i < days; i++) {
    const date = now.subtract(i, 'd').format('YYYY-MM-DD');
    //
    // api url
    const url = `${baseUrl}history`;
    // api parameters
    const parameters = {
      params: {
        country: country === 'global' ? 'all' : country,
        day: date,
      },
    };
    // calling api per days
    try {
      const response = await axios.get(url, {
        ...defaultConfig,
        ...parameters,
      });
      const target = response.data.response[0];
      chartData.push(calculateToChart(target));
    } catch (e) {
      //
      return null;
    }
  }

  return chartData;
};
