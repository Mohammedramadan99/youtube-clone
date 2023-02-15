import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';


const options = {
  url: BASE_URL,
  params: {
    maxResults:'50'
  },
  headers: {
    'X-RapidAPI-Key': 'bcbf3e2254mshf98777e422fbf60p1a2acbjsn36cd37fbb754',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
