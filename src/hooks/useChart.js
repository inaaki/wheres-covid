/* eslint-disable no-await-in-loop */
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { useState } from 'react';
import client from '../api/client';
import { calculateToChart } from '../utils/calculate';

const useChart = (days, country) => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const request = async () => {
    const chartData = [];
    let errorData = '';
    // extend dayjs with utc plugin
    dayjs.extend(utc);
    const now = dayjs().utc();
    //
    setLoading(true);
    //
    for (let i = 0; i < days; i += 1) {
      if (errorData) return;
      //
      const date = now.subtract(i, 'd').format('YYYY-MM-DD');
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
        errorData = e.message;
      }
    }

    if (errorData) {
      setError(errorData);
    } else {
      setData(chartData);
    }
    setLoading(false);
  };

  return {
    error,
    loading,
    data,
    request,
  };
};

export default useChart;
