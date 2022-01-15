import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import NewsProvider from './newsContext';
import CategoriesPage from './components/CategoriesPage';

function App() {
  return (
    <NewsProvider>
      <StyledApp>
        <header>
          <Header />
        </header>
        <CategoriesPage />
      </StyledApp>
    </NewsProvider>
  );
}

const StyledApp = styled.div`
  background-color: #ffffff;
`;

export default App;
