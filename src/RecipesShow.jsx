export function RecipesShow(props) {
  return (
    <div id="recipes-show">
      <h1>Recipe Info</h1>
      <h2>{props.recipe.title}</h2>
      <p>Chef: {props.recipe.chef}</p>
    </div>
  )
}
