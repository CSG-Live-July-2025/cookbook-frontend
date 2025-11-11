import { RecipesIndex } from "./RecipesIndex";
import { RecipesNew } from "./RecipesNew";
import { Modal } from "./Modal";
import { RecipesShow } from "./RecipesShow";

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

  const handleCreate = (params) => {
    console.log("HandleCreate");
    axios.post("http://localhost:3000/recipes", params)
      .then((response) => {
        console.log(response.data);
        // setRecipes(response.data); // cannot do this - breaks
        // let copiedRecipes = Array.from(recipes);
        // copiedRecipes.push(response.data);
        // setRecipes(copiedRecipes);
        setRecipes([...recipes, response.data]); // spread operator
      })
  }

  const handleUpdate = (recipe, params) => {
    console.log("handleUpdate");
    axios.patch(`http://localhost:3000/recipes/${recipe.id}`, params)
      .then((response) => {
        console.log(response.data);

        // Explicit solution
        // let updatedRecipes = [];
        // let index = 0;
        // while (index < recipes.length) {
        //   if (recipes[index].id === response.data.id) {
        //     // if the recipe's id that we're looping through equals the id of the recipe we updated, then update use the udpated version of that recipe in the array
        //     updatedRecipes.push(response.data);
        //   } else {
        //     // if the recipe's id doesn't equal the id of the recipe we updated, use the original value of the recipe
        //     updatedRecipes.push(recipes[index]);
        //   }
        //   index += 1
        // }
        // setRecipes(updatedRecipes);

        // Ternary Operator solution
        setRecipes(recipes.map(r => r.id === response.data.id ? response.data : r))
        setIsRecipeShowVisible(false);
      })
  }

  // handleIndex();
  useEffect(handleIndex, []);

  return (
    <div>
      <RecipesNew onCreate={handleCreate} />
      <RecipesIndex recipes_prop={recipes} onShow={handleShow} />
      <Modal show={isRecipeShowVisible} onClose={() => setIsRecipeShowVisible(false)} >
        <RecipesShow recipe={currentRecipe} onUpdate={handleUpdate} />
      </Modal>
    </div>
  );
}
