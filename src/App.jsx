// In jsx files - all the HTML needs to be wrapped in one parent HTML element
// Components

// react - pascal case - FirstName
// js - camel case - firstName
// ruby - snake case - first_name

import { Footer } from "./Footer"
import { Header } from "./Header"
import { RecipesPage } from "./RecipesPage"

function App() {
  return (
    <div>
      <Header />
      <RecipesPage />
      <Footer />
    </div>
  )
}

export default App
