import React from 'react'
import { useState, useEffect } from 'react'

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('data.json')
        const data = await response.json()
        setRecipes(data);
      } catch (error) {
        console.error('Error oading recipe data:', error);
      }
      
    };
    fetchData();
  }, [])
  
  return (
    <div className='text-blue-500'>
      <h1>Home Page</h1>
      {recipes.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul className='space-y-4'>
          {recipes.map((recipe) => (
            <li key={recipe.id} className='bg-white p-4 rounded shadow'>
              <h2 className='"text-xl font-semibold'>{recipe.name}</h2>
              <p> <strong>Ingredients</strong>{recipe.ingredients.join(',')}</p>
              <p> <strong>Instructions</strong>{recipe.instruction}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

    
    
    
  

export default HomePage