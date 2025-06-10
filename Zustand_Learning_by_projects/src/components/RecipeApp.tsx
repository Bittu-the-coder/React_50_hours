import { useState } from "react";
import useRecipeStore from "../store/recipeStore";

interface Recipe {
  id: number;
  title: string;
  ingredients: string[];
  instructions: string;
}

const RecipeApp = () => {
  const { recipes, addRecipe, removeRecipe } = useRecipeStore();
  const [name, setName] = useState<string>("");
  const [ingredients, setIngredients] = useState<string>("");
  const [instructions, setInstructions] = useState<string>("");
  const [editRecipe, setEditRecipe] = useState<number | null>(null);

  const handleAddRecipe = () => {
    if (
      name.trim() === "" ||
      ingredients.trim() === "" ||
      instructions.trim() === ""
    ) {
      return;
    }
    addRecipe({
      id: Date.now(),
      title: name,
      ingredients: ingredients.split(",").map((ing) => ing.trim()),
      instructions,
    });
  };

  const handleUpdateRecipe = () => {
    if (
      name.trim() === "" ||
      ingredients.trim() === "" ||
      instructions.trim() === ""
    ) {
      return;
    }
    if (editRecipe) {
      if (removeRecipe) {
        removeRecipe(editRecipe);
      }
      addRecipe({
        id: Date.now(),
        title: name,
        ingredients: ingredients.split(",").map((ing) => ing.trim()),
        instructions,
      });
    }
    setEditRecipe(null);
  };

  const handleEditRecipe = (recipe: Recipe) => {
    setName(recipe.title);
    setIngredients(recipe.ingredients.join(", "));
    setInstructions(recipe.instructions);
    setEditRecipe(recipe.id);
  };

  return (
    <div className="min-h-screen flex item-center justify-center bg-green-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-4">Recipe Book</h1>
        <div className="space-y-4 mb-6">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Recipe Name"
            className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-500 py-2"
          />
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Ingredients (comma separated)"
            className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-500 py-2"
          />
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="Instructions"
            className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-500 py-2"
          />
          <div className="flex justify-between">
            {editRecipe ? (
              <>
                <div>
                  <button
                    onClick={handleUpdateRecipe}
                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    Update Recipe
                  </button>
                  <button
                    onClick={() => {
                      setEditRecipe(null);
                      setName("");
                      setIngredients("");
                      setInstructions("");
                    }}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 ml-2"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <div>
                <button
                  onClick={handleAddRecipe}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Add Recipe
                </button>
              </div>
            )}
          </div>
        </div>
        <ul className="space-y-4">
          {recipes.map((recipe) => (
            <li
              key={recipe.id}
              className="border border-gray-300 p-4 rounded shadow-sm bg-white"
            >
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-700 mb-2">
                Ingredients: {recipe.ingredients.join(", ")}
              </p>
              <p className="text-gray-700 mb-4">
                Instructions: {recipe.instructions}
              </p>
              <div className="flex justify-between">
                <button
                  onClick={() => handleEditRecipe(recipe)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => removeRecipe?.(recipe.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeApp;
