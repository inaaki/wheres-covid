/* eslint-disable no-await-in-loop */
/* eslint-disable no-alert */
import dayjs from 'dayjs';
import { calculateToChart } from '../utils/calculate';
import client from './client';

const baseUrl = `https://${import.meta.env.VITE_API_HOST}/`;

const defaultConfig = {
  headers: {
    'x-rapidapi-host': import.meta.env.VITE_API_HOST,
    'x-rapidapi-key': import.meta.env.VITE_API_KEY,
  },
};

//
export const getCountries = async () => {
  let result;
  try {
    result = await client.get('/countries');
  } catch (e) {
    //
    alert(e.message);
  }
  return result;
};
//
export const getCovidData = async (country) => {
  let result;
  // query parameters
  const query = {
    params: {
      country: country === 'global' ? null : country,
    },
  };
  try {
    result = await client.get('/statistics', query);
  } catch (e) {
    //
    alert(e.message);
  }
  return result;
};
//
export const getPerDaysData = async (days, country) => {
  const chartData = [];
  //

  const now = dayjs();
  for (let i = 0; i < days; i += 1) {
    const date = now.subtract(i, 'd').format('YYYY-MM-DD');
    //
    // api parameters
    const query = {
      params: {
        country: country === 'global' ? 'all' : country,
        day: date,
      },
    };
    // calling api per days
    try {
      const response = await client.get('/history', query);
      chartData.push(calculateToChart(response[0]));
    } catch (e) {
      //
      alert(e);
    }
  }

  return chartData;
};
