// MyContext.js
import React, { createContext, useContext, useState } from 'react';

const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {
  const [recipeList, setRecipeList] = useState([]);

  const addRecipe = (recipe) => {
    setRecipeList((prevList) => [...prevList, recipe]);
  };

  return (
    <RecipeContext.Provider value={{ recipeList, addRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};

const useRecipeContext = () => {
  return useContext(RecipeContext);
};

export { RecipeProvider, useRecipeContext };