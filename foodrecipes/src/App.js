import React from 'react';
import './Components/Style.css';
import Meal from './Components/Meal';
import RecipeInfo from './Components/RecipeInfo';
import {Route,Routes} from 'react-router-dom';

function App() {
  return (
    <>
   <Routes>
      <Route  path="/" element={<Meal/>}/>
      <Route exact path="/:recipeId" element={<RecipeInfo/>}/>
      </Routes>
    </>
  )
}

export default App;