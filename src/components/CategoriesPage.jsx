import React from 'react';
import styled from 'styled-components';
import { useNewsCategoryContext } from '../newsContext';

function CategoriesPage() {
  const categories = useNewsCategoryContext();

  const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

  const renderCategoryItem = () => categories.map((category) => {
    const correctCasing = capitalizeFirstLetter(category.category);
    return (
      <CategoryWrapper key={correctCasing}>
        <CategoryImage src={category.imageUrl} alt={correctCasing} />
        <CategoryTitle>{correctCasing}</CategoryTitle>
      </CategoryWrapper>
    );
  });

  return (
    <StyledContainer>
      <p>Categories to show</p>
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
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const CategoryTitle = styled.p`
    color: #a175d3;
    cursor: pointer;
`;

const CategoryImage = styled.img`
    object-fit: cover;
    height: 300px;
    width: 300px;
`;

export default CategoriesPage;
