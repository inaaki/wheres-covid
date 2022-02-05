import { useState } from 'react';
import client from '../api/client';

const useCountries = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const request = async () => {
    const END_URL = '/countries';
    setLoading(true);
    try {
      const response = await client.get(END_URL);
      setData(response);
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

export default useCountries;
