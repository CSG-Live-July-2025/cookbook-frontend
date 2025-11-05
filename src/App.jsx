// In jsx files - all the HTML needs to be wrapped in one parent HTML element
// Components

// react - pascal case - FirstName
// js - camel case - firstName
// ruby - snake case - first_name

import { Footer } from "./Footer"
import { Header } from "./Header"
import { RecipesPage } from "./RecipesPage"
import { Welcome } from './Welcome'

function App() {
  let name1 = "Matt";
  let name2 = "Ron";
  let name3 = "Junior";

  return (
    <div>
      <Header />
      <Welcome name={name1} />
      <Welcome name={name2} />
      <Welcome name={name3} />
      <RecipesPage />
      <Footer />
    </div>
  )
}

export default App
