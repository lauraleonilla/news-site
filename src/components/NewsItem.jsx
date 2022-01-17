import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import Button from '@mui/material/Button';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { format, parseISO } from 'date-fns';
import { capitalizeFirstLetter } from '../helpers';
import IconWithText from './IconWithText';

function NewsView({ newsArticle }) {
  const upperCaseCategory = capitalizeFirstLetter(newsArticle.category);
  const formattedDate = format(parseISO(newsArticle.createdAt), 'yyyy/MM/dd');

  const navigate = useNavigate();

  const clickHandler = (articleId) => {
    navigate(`/articles/${articleId}`);
  };

  return (
    <NewsItemWrapper key={newsArticle.id}>
      <NewsImage src={newsArticle.thumbnailUrl} alt={newsArticle.title} />
      <BottomContainer>
        <Title>{newsArticle.title}</Title>
        <IconWrapper>
          <IconWithText icon={<RssFeedIcon />} text={upperCaseCategory} />
          <IconWithText icon={<RemoveRedEyeIcon />} text={newsArticle.views} />
        </IconWrapper>
      </BottomContainer>
      <DateButtonWrapper>
        <IconWithText icon={<CalendarTodayIcon />} text={formattedDate} />
        <StyledButton onClick={() => clickHandler(newsArticle.id)}>Read more</StyledButton>
      </DateButtonWrapper>
    </NewsItemWrapper>
  );
}

const NewsItemWrapper = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #e7e5f0
`;

const NewsImage = styled.img`
    object-fit: cover;
    height: 300px;
    width: 300px;
`;

const StyledButton = styled(Button)`
    && {
      color: white;
      background-color: #a175d3;
      margin-left: 20px;
    }
`;

const IconWrapper = styled.span`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 20px;
`;

const BottomContainer = styled.div`
  padding: 0 10px;
`;

const DateButtonWrapper = styled.span`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #e7e5f0;
    padding: 0 10px;
`;

const Title = styled.p`
    font-weight: bold;
`;

export default NewsView;
