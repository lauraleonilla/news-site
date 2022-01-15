import React from 'react';
import styled from 'styled-components';
import PageTitle from './PageTitle';

function Header() {
  return (
    <StyledHeader>
      <SiteTitle>Awesome News</SiteTitle>
      <PageTitle title="Recent news" />
      <PageTitle title="Top rated" />
      <PageTitle title="Categories" />
    </StyledHeader>
  );
}

const SiteTitle = styled.p`
    color: #ffffff;
    margin-right: 20px;
`;

const StyledHeader = styled.div`
  background-color: #a175d3;
  height: 40px;
  display: flex;
  flex-direction: row;
  padding: 10px;
`;

export default Header;
