export function RecipesNew() {
  return (
    <div id="recipes-new">
      <h1>New Recipe</h1>
      <form>
        <div>
          Title: <input type="text" />
        </div>
        <div>
          Chef: <input type="text" />
        </div>
        <button type="submit">Create Recipe</button>
      </form>
    </div>
  );
}
