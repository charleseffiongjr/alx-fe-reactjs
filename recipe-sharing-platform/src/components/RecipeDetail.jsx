import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe ID from the route
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch('/data.json'); // From public folder
        const data = await response.json();
        const foundRecipe = data.find((item) => item.id.toString() === id); // Match ID
        setRecipe(foundRecipe);
      } catch (error) {
        console.error('Failed to load recipe:', error);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <p className="text-center mt-10 text-gray-600">Loading recipe...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-64 object-cover rounded-lg shadow mb-6"
      />
      <h1 className="text-3xl font-bold mb-2">{recipe.name}</h1>
      <h2 className="text-xl font-semibold mt-4 mb-2 text-blue-700">Ingredients</h2>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mb-2 text-blue-700">Instructions</h2>
      <p className="text-gray-700 leading-relaxed">{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;
