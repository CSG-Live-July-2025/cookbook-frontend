import { RecipesIndex } from "./RecipesIndex";
import { RecipesNew } from "./RecipesNew";

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
  
  const handleIndex = () => {
    axios.get("http://localhost:3000/recipes").then((response) => {
      console.log(response.data);
      // recipes = response.data;
      setRecipes(response.data);
    })
  }
  
  
  // handleIndex();
  useEffect(handleIndex, []);

  return (
    <div>
      <RecipesNew />
      <RecipesIndex recipes_prop={recipes} />
    </div>
  );
}
