import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FavoritesList from './components/FavoritesList'
import RecommendationsList from '/components/RecommendationsList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < RecipeList />
      <AddRecipeForm />
      <RecipeDetails />
      <FavoritesList />
      <RecommendationsList />
      <Router>
        <Routes>
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </Router>
    
    </>
  )
}

export default App
