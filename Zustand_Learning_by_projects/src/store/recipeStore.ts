import { create } from "zustand";

interface Recipe {
  id: number;
  title: string;
  ingredients: string[];
  instructions: string;
}

interface RecipeStore {
  recipes: Recipe[];
  addRecipe: (recipe: Recipe) => void;
  removeRecipe?: (id: number) => void;
}

const useRecipeStore = create<RecipeStore>((set) => ({
  recipes: [],
  addRecipe: (recipe: Recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
    })),
  removeRecipe: (id: number) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
}));

export default useRecipeStore;
