import React, { useContext } from 'react';
import styled from 'styled-components';
import { NewsContext } from '../newsContext';
import NewsItem from './NewsItem';

function TopNews() {
  const news = useContext(NewsContext);
  const sortedNews = news.sort((a, b) => b.views - a.views);

  return (
    <div>
      <TopNewsContainer>
        {sortedNews.map((e) => <NewsItem newsArticle={e} key={e.id} />)}
      </TopNewsContainer>
    </div>
  );
}

const TopNewsContainer = styled.div`
    padding: 20px;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 50px;
    justify-content: flex-start;
`;

export default TopNews;
