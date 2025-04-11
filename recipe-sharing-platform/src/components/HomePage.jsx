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
    <div className='text-blue-500'>Home Page</div>
  )
}

export default HomePage