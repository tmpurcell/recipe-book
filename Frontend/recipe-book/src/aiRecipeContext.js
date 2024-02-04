// MyContext.js
import React, { createContext, useContext, useState } from 'react';

const AIRecipeContext = createContext();

const AIRecipeProvider = ({ children }) => {
  const [aiRecipeList, setAIRecipeList] = useState([]);

  const addAIRecipe = (recipe) => {
    setAIRecipeList((prevList) => [...prevList, recipe]);
  };

  return (
    <AIRecipeContext.Provider value={{ aiRecipeList, addAIRecipe }}>
      {children}
    </AIRecipeContext.Provider>
  );
};

const useAIRecipeContext = () => {
  return useContext(AIRecipeContext);
};

export { AIRecipeProvider, useAIRecipeContext };