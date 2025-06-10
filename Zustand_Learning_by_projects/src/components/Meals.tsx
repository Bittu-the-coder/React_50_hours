import { useEffect } from "react";
import useMealStore from "../store/mealStore";

const Meals = () => {
  const { meals, searchQuery, setMeals, setSearchQuery } = useMealStore();

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
        );
        const data = await response.json();
        setMeals(data.meals);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMeals();
  }, [setMeals]);

  const filteredMeals = meals.filter((meal) =>
    meal.strMeal.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 py-10">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-900">
          Seafood Recipes
        </h1>
        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Search for a meal..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md px-4 py-2 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredMeals.length > 0 ? (
            filteredMeals.map((meal) => (
              <div
                key={meal.idMeal}
                className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center transition-transform hover:scale-105"
              >
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="h-56 w-full object-cover"
                />
                <div className="p-4 w-full flex flex-col items-center">
                  <h2 className="text-lg font-semibold text-blue-800 mb-2 text-center">
                    {meal.strMeal}
                  </h2>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 text-lg">
              No meals found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Meals;
