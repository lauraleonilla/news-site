import React from 'react';
import styled from 'styled-components';

function ArticlePageTitle({ title }) {
  return (
    <SrtyledArticlePageTitle>{title}</SrtyledArticlePageTitle>
  );
}

const SrtyledArticlePageTitle = styled.h3`
    font-weight: bold;
    font-size: 22px;
`;

export default ArticlePageTitle;
