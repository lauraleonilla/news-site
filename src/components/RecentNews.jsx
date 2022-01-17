import React, { useContext } from 'react';
import styled from 'styled-components';
import { NewsContext } from '../newsContext';
import NewsItem from './NewsItem';

function RecentNews() {
  const news = useContext(NewsContext);
  const sortedNews = news.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div>
      <RecentNewsContainer>
        {sortedNews.map((e) => <NewsItem newsArticle={e} key={e.id} />)}
      </RecentNewsContainer>
    </div>
  );
}

const RecentNewsContainer = styled.div`
    padding: 20px;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 50px;
    justify-content: flex-start;
`;

export default RecentNews;
