// MyRecipesButton.js

import React from 'react';
import Button from '@mui/material/Button';
import { useAIRecipeContext } from '../aiRecipeContext';
import RecipeModel from '../models/RecipeModel';

const AddRecipeButton = ({ recipeName, ingredients, steps, onAddToMyRecipes }) => {
    const { addAIRecipe } = useAIRecipeContext();

  const handleAddToMyRecipes = () => {
    const recipeInstance = new RecipeModel(
        recipeName,
        ingredients,
        steps
    )
    addAIRecipe(recipeInstance)
    console.log(`Added "${recipeName}" to my recipes`);
  };

  return (
    <Button variant="contained" style={{color: '#004921', backgroundColor: '#fff0e0'}} onClick={handleAddToMyRecipes}>
      Add to My Recipes
    </Button>
  );
};

export default AddRecipeButton;
