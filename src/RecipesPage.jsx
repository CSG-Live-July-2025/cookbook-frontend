import { RecipesIndex } from "./RecipesIndex";
import { RecipesNew } from "./RecipesNew";
import { Modal } from "./Modal";

import axios from "axios";
import { useState, useEffect } from "react";

// all the data comes from here - api request or where we're create the data
// to pass data from one component to another - we'd use a prop

// axios - 3rd party package/dependency that allows us to make web requests

// hook - functions that come with react that allow you to 'hook' into specific react functionality
// React state - useState
export function RecipesPage() {
  // let recipes = [];
  const [recipes, setRecipes] = useState([]);
  // recipes - special state variable
  // setRecipes - special function to change the state variable
  // ([]) - the default value of the state variable
  const [isRecipeShowVisible, setIsRecipeShowVisible] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState({})
  
  const handleIndex = () => {
    axios.get("http://localhost:3000/recipes").then((response) => {
      console.log(response.data);
      // recipes = response.data;
      setRecipes(response.data);
    })
  }

  const handleShow = (recipe) => {
    console.log("handleShow", recipe);
    setIsRecipeShowVisible(true);
    setCurrentRecipe(recipe);
  }

  // handleIndex();
  useEffect(handleIndex, []);

  return (
    <div>
      <RecipesNew />
      <RecipesIndex recipes_prop={recipes} onShow={handleShow} />
      <Modal show={isRecipeShowVisible} onClose={() => setIsRecipeShowVisible(false)} >
        <h2>{currentRecipe.title}</h2>
        <p>Chef: {currentRecipe.chef}</p>
      </Modal>
    </div>
  );
}
