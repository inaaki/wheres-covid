import { useState } from 'react';
import client from '../api/client';
import calculateStats from '../utils/calculate';

const useCovidInfo = (country) => {
  const [data, setData] = useState();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const request = async () => {
    const END_URL = '/statistics';
    const query = {
      params: {
        country: country === 'global' ? null : country,
      },
    };
    //
    setLoading(true);
    try {
      const response = await client.get(END_URL, query);
      const info = calculateStats(response);
      setData(info);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    error,
    loading,
    request,
  };
};

export default useCovidInfo;
