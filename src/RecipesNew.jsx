export function RecipesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target
    const params = new FormData(form);
    props.onCreate(params);
    form.reset();
  }

  return (
    <div id="recipes-new">
      <h1>New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" type="text" />
        </div>
        <div>
          Chef: <input name="chef" type="text" />
        </div>
        <button type="submit">Create Recipe</button>
      </form>
    </div>
  );
}
