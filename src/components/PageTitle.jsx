import React from 'react';
import styled from 'styled-components';

function PageTitle({ title }) {
  return (
    <NewsPageTitle>{title}</NewsPageTitle>
  );
}

const NewsPageTitle = styled.p`
  color: #ffffff;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
`;

export default PageTitle;
