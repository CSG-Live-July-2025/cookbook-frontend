export function RecipesIndex(props) {
  return (
    <div id="recipes-index">
      <h1>All {props.recipes_prop.length} Recipes</h1>
      {props.recipes_prop.map((recipe) => (
        <div key={recipe.id} className="card">
          <img src={recipe.image_url} />
          <h2>{recipe.title}</h2>
          <p>Chef: {recipe.chef}</p>
          <button onClick={() => props.onShow(recipe)}>More Info</button>
        </div>
      ))}
    </div>
  );
}


// with extra styling:
// export function RecipesIndex(props) {
//   return (
//     <div id="recipes-index">
//       <h1>All {props.recipes_prop.length} Recipes</h1>
//       <div className="cards">
//         {props.recipes_prop.map((recipe) => (
//           <div key={recipe.id} className="card">
//             <img src={recipe.image_url} />
//             <div class="card-body">
//               <h2>{recipe.title}</h2>
//               <p>Chef: {recipe.chef}</p>
//               <button>More Info</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
