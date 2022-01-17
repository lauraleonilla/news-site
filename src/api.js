import axios from 'axios';

const newsUrl = 'https://interview-8a779-default-rtdb.europe-west1.firebasedatabase.app/news.json';

export const getNewsdata = async () => {
  const data = await axios.get(newsUrl);
  return data;
};
