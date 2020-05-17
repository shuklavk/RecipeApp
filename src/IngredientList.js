import React from 'react';
import Ingredient from './Ingredient';

export default ({ arrOfIngredients }) => {
  let mappedIngredients = arrOfIngredients.map(ing => {
    return (
      <Ingredient imgURL={ing.imgURL} ingredientName={ing.ingredientName} />
    );
  });
  return <ul style={{ listStyle: 'none' }}>{mappedIngredients}</ul>;
};
