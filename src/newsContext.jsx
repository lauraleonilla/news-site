import React, { useEffect, useState } from 'react';
import { getNewsdata } from './api';

export const NewsContext = React.createContext();

function NewsProvider({ children }) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await getNewsdata();
      setNews(Object.values(data));
    }
    fetchData();
  }, []);

  return <NewsContext.Provider value={news}>{children}</NewsContext.Provider>;
}

export default NewsProvider;
