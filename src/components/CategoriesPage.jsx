import React from 'react';
import styled from 'styled-components';
import ArticlePageTitle from './ArticlePageTitle';
import carImage from '../images/car.png';
import entertainmentImage from '../images/entertainment.png';
import environmentImage from '../images/environment.png';
import fashionImage from '../images/fashion.png';
import financeImage from '../images/finance.png';
import scienceImage from '../images/science.png';
import technologyImage from '../images/technology.png';
import travelImage from '../images/travel.png';

function CategoriesPage() {
  const categories = [{ name: 'Car', image: carImage }, { name: 'Environment', image: environmentImage },
    { name: 'Entertainment', image: entertainmentImage }, { name: 'Fashion', image: fashionImage },
    { name: 'Finances', image: financeImage }, { name: 'Science', image: scienceImage },
    { name: 'Technology', image: technologyImage }, { name: 'Travel', image: travelImage }];

  const renderCategoryItem = () => categories.map((category) => (
    <CategoryWrapper key={category.name}>
      <CategoryImage src={category.image} alt={category.name} />
      <CategoryTitle>{category.name}</CategoryTitle>
    </CategoryWrapper>
  ));

  return (
    <StyledContainer>
      <ArticlePageTitle title="Categories to show" />
      <CategoriesContainer>
        {renderCategoryItem()}
      </CategoriesContainer>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
    background-color: #ffffff;
    padding: 20px;
`;

const CategoriesContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 50px;
    justify-content: flex-start;
`;

const CategoryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const CategoryTitle = styled.p`
    color: #a175d3;
    cursor: pointer;
    font-weight: 600;
`;

const CategoryImage = styled.img`
    object-fit: cover;
    height: 300px;
    width: 300px;
`;

export default CategoriesPage;
