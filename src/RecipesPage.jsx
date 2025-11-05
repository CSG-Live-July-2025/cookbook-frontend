import { RecipesIndex } from "./RecipesIndex";
import { RecipesNew } from "./RecipesNew";

// all the data comes from here - api request or where we're create the data
// to pass data from one component to another - we'd use a prop
export function RecipesPage() {
  let recipes = [
    {
      id: 1,
      title: "Raw Eggs",
      chef: "Peter Jang",
      image_url: "https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg"
    },
    {
      id: 2,
      title: "Mud Pie",
      chef: "Jay Wengrow",
      image_url: "https://static.onecms.io/wp-content/uploads/sites/9/2017/12/mud-pie-XL-RECIPE2016.jpg"
    }
  ];
  // localhost:3000/recipes

  return (
    <div>
      <RecipesNew />
      <RecipesIndex recipes_prop={recipes} />
    </div>
  );
}
