import React, { useEffect, useState, useContext } from 'react';
import getData from './api';

const NewsContext = React.createContext();

function NewsProvider({ children }) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await getData();
      setNews(data);
    }
    fetchData();
  }, []);

  return <NewsContext.Provider value={news}>{children}</NewsContext.Provider>;
}

export function useNewsCategoryContext() {
  const context = useContext(NewsContext);
  if (context === undefined) {
    throw new Error('Context must be used within a Provider');
  }
  const newsEntries = Object.values(context);
  const uniqueCategories = [...new Set(newsEntries.map((item) => item.category))];
  const categorisWithImages = [];

  uniqueCategories.forEach((item) => {
    const categoryObject = { category: item };
    const categoryImage = newsEntries.find((e) => {
      if (item === e.category) {
        return e;
      }
      return null;
    });
    categoryObject.imageUrl = categoryImage.imageUrl;
    categorisWithImages.push(categoryObject);
    return categoryObject;
  });
  return categorisWithImages;
}

export default NewsProvider;
