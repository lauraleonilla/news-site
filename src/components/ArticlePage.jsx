import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { format, parseISO } from 'date-fns';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ArticlePageTitle from './ArticlePageTitle';
import { NewsContext } from '../newsContext';
import IconWithText from './IconWithText';
import { capitalizeFirstLetter } from '../helpers';

function ArticlePage() {
  const [articleToRender, setArticleToRender] = useState(null);
  const [formattedDate, setFormattedDate] = useState(null);
  const [categoryTitle, setCategoryTitle] = useState(null);
  const { articleId } = useParams();
  const news = useContext(NewsContext);

  useEffect(() => {
    if (news?.length) {
      const selectedArticle = news.find((article) => article.id === articleId);
      if (selectedArticle) {
        setArticleToRender(selectedArticle);
        const articleDate = format(parseISO(selectedArticle?.createdAt), 'yyyy/MM/dd');
        setFormattedDate(articleDate);
        const upperCaseCategory = capitalizeFirstLetter(selectedArticle?.category);
        setCategoryTitle(upperCaseCategory);
      }
    }
  }, [news]);

  return (
    articleToRender ? (
      <ArticlePageContainer>
        <IconsContainer>
          <IconWithText icon={<RssFeedIcon />} text={categoryTitle} />
          <IconWithText icon={<CalendarTodayIcon />} text={formattedDate} />
          <IconWithText icon={<RemoveRedEyeIcon />} text={articleToRender.views} />
        </IconsContainer>
        <ArticlePageTitle title={articleToRender.title} />
        <ArticleImage src={articleToRender.imageUrl} alt={articleToRender.title} />
        <ArticleSubtitle>{articleToRender.subtitle}</ArticleSubtitle>
        <p>{articleToRender.body}</p>
      </ArticlePageContainer>
    ) : null
  );
}

const IconsContainer = styled.div`
  display: flex;
  width: 500px;
  justify-content: space-between;
`;

const ArticlePageContainer = styled.div`
  width: 800px;
  padding: 30px 0 100px 30px;
`;

const ArticleImage = styled.img`
  width: 100%;
`;

const ArticleSubtitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 30px;
`;

export default ArticlePage;
