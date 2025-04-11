// src/components/AddRecipeForm.jsx

import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required.';
    }

    const ingredientList = formData.ingredients
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);

    if (!formData.ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required.';
    } else if (ingredientList.length < 2) {
      newErrors.ingredients = 'Please provide at least two ingredients (comma-separated).';
    }

    if (!formData.steps.trim()) {
      newErrors.steps = 'Preparation steps are required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log('Recipe submitted:', formData);

    setFormData({ title: '', ingredients: '', steps: '' });
    setErrors({});
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
          onChange={(e) => setTitle(e.target.value)}
          className={`w-full border rounded p-2 ${errors.title ? 'border-red-500' : ''}`}
          required
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
      </div>

      <div>
        <label className="block mb-1 font-medium">Ingredients</label>
        <textarea
          name="ingredients"
          value={formData.ingredients}
          onChange={(e) => setTitle(e.target.value)}
          rows="4"
          className={`w-full border rounded p-2 ${errors.ingredients ? 'border-red-500' : ''}`}
          required
        />
        {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
      </div>

      <div>
        <label className="block mb-1 font-medium">Preparation Steps</label>
        <textarea
          name="steps"
          value={formData.steps}
          onChange={handleChange}
          rows="4"
          className={`w-full border rounded p-2 ${errors.steps ? 'border-red-500' : ''}`}
          required
        />
        {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
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
