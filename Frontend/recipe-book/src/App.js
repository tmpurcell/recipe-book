import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { RecipeProvider } from './recipeContext';
import Home from './pages/index.js';
import Login from './pages/login.js';
import SignUp from './pages/signup.js';
import Upload from './pages/upload.js';
import View from './pages/view.js';
import MealPrep from './pages/mealprep.js';
import MealAI from './pages/aikitchen.js';
import BudgetPlan from './pages/budgetplan.js';
import MealSuggestion from './pages/mealsuggestion.js';
import AvailableItems from './pages/availableitems.js';


import Header from './components/Header.js';
import { AIRecipeProvider } from './aiRecipeContext';


  
function App() { 
    return (
      <RecipeProvider> 
        <AIRecipeProvider>
        <div className="App">
          <Router>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Login' element={<Login />} />
              <Route path='/Signup' element={<SignUp />} />
              <Route path='/Upload' element={<Upload />} />
              <Route path='/ViewRecipes' element={<View />} />
              <Route path='/AIKitchen' element={<MealAI />} />
              <Route path='/MealPrep' element={<MealPrep />} />
              <Route path='/BudgetPlan' element={<BudgetPlan />} />
              <Route path='/MealSuggestion' element={<MealSuggestion />} />
              <Route path='/AvailableItems' element={<AvailableItems />} />
            </Routes>
          </Router>
        </div>
        </AIRecipeProvider>
      </RecipeProvider>
    ); 
} 
  
export default App;

