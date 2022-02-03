import axios from 'axios';

// default settings for all axios calls
axios.defaults.baseURL = `https://${import.meta.env.VITE_API_HOST}`;
axios.defaults.headers = {
  'x-rapidapi-host': import.meta.env.VITE_API_HOST,
  'x-rapidapi-key': import.meta.env.VITE_API_KEY,
};

// get
const fetchGet = async (url, params) => {
  try {
    const response = await axios.get(url, params);
    return response.data.response;
  } catch (error) {
    const { response, request } = error;
    //
    if (response) {
      const { status } = response;
      if (status === 404) {
        return new Error('No data found');
      }
      return new Error('An error happened');
    }
    if (request) {
      return new Error('Database may be down');
    }
    return new Error('An error happened');
  }
};

export default {
  get: fetchGet,
};
