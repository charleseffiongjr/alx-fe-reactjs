import React from 'react'

function AddRecipeForm() {
    return (
      
        
        <form onSubmit={handleSubmit}>
            <div> <h1>AddRecipeForm</h1></div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <button type="submit">Add Recipe</button>
      </form>
  )
}

export default AddRecipeForm