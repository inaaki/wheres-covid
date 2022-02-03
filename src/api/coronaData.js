/* eslint-disable no-await-in-loop */
/* eslint-disable no-alert */
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { calculateToChart } from '../utils/calculate';
import client from './client';

// extend dayjs with utc plugin
dayjs.extend(utc);

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
  const now = dayjs().utc();
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
