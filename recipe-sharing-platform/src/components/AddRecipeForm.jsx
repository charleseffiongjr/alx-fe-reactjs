// src/components/AddRecipeForm.jsx

import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Post the data to your API or handle it as needed
    console.log('Recipe submitted:', formData);

    // Optional: Clear form after submission
    setFormData({ title: '', ingredients: '', steps: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded shadow-md space-y-4">
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>

      <div>
        <label className="block mb-1 font-medium">Recipe Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Ingredients</label>
        <textarea
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          rows="4"
          className="w-full border rounded p-2"
          required
        ></textarea>
      </div>

      <div>
        <label className="block mb-1 font-medium">Preparation Steps</label>
        <textarea
          name="steps"
          value={formData.steps}
          onChange={handleChange}
          rows="4"
          className="w-full border rounded p-2"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Submit Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
