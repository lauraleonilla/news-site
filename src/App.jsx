import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import NewsProvider from './newsContext';
import CategoriesPage from './components/CategoriesPage';
import Startpage from './components/StartPage';
import RecentNews from './components/RecentNews';
import TopNews from './components/TopNews';
import ArticlePage from './components/ArticlePage';

function App() {
  return (
    <NewsProvider>
      <StyledApp>
        <header>
          <Header />
        </header>
        <Routes>
          <Route path="/" element={<Startpage />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="recent" element={<RecentNews />} />
          <Route path="top-rated" element={<TopNews />} />
          <Route path="articles/:articleId" element={<ArticlePage />} />
        </Routes>
      </StyledApp>
    </NewsProvider>
  );
}

const StyledApp = styled.div`
  background-color: #ffffff;
`;

export default App;
