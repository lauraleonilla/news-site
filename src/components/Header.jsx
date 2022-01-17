import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PageTitle from './PageTitle';

function Header() {
  return (
    <PageHeader>
      <NewsIcon />
      <SiteTitle>Awesome News</SiteTitle>
      <Link to="/recent" style={{ textDecoration: 'none' }}>
        <PageTitle title="Recent news" />
      </Link>
      <Link to="/top-rated" style={{ textDecoration: 'none' }}>
        <PageTitle title="Top rated" />
      </Link>
      <Link to="/categories" style={{ textDecoration: 'none' }}>
        <PageTitle title="Categories" />
      </Link>
    </PageHeader>
  );
}

const SiteTitle = styled.p`
    color: #ffffff;
    margin-right: 20px;
    font-weight: bold;
    font-size: 18px;
`;

const NewsIcon = styled(NewspaperIcon)`
    color: #ffffff;
    margin-right: 10px;
`;

const PageHeader = styled.div`
    background-color: #a175d3;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
`;

export default Header;
