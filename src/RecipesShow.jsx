export function RecipesShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const params = new FormData(form);
    props.onUpdate(props.recipe, params);
    form.reset();
  }

  return (
    <div id="recipes-show">
      <h1>Recipe Info</h1>
      <h2>{props.recipe.title}</h2>
      <p>Chef: {props.recipe.chef}</p>
      <hr />
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" defaultValue={props.recipe.title} type="text" />
        </div>
        <div>
          Chef: <input name="chef" defaultValue={props.recipe.chef} type="text" />
        </div>
        <button type="submit">Update Recipe</button>
      </form>
      <button onClick={() => props.onDestroy(props.recipe)}>Delete Recipe</button>
    </div>
  )
}
